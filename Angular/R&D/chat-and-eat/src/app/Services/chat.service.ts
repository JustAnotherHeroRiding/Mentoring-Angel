import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  of,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { AuthService } from './auth.service';
import { Profile, SupabaseService } from './supabase.service';
import { AuthSession, Session } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';

export interface Message {
  id: number;
  authorId: string;
  username: string;
  content: string;
  profile_pic: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  public messages$ = this.messagesSubject.asObservable();
  session: Session | undefined | null = undefined;
  typing = new Subject<string | null>();
  private typingSubject = new Subject<void>();
  messagesLoading = new BehaviorSubject<boolean>(false);

  typingDebounced = this.typing.pipe(
    debounceTime(500), // Adjust time as needed
    distinctUntilChanged()
  );

  private sessionSubscription?: Subscription;
  isLoadingSession = true;
  private profile?: Profile;
  private messagesSkip = 0;

  constructor(
    private authService: AuthService,
    private supabase: SupabaseService
  ) {
    this.sessionSubscription = this.supabase.session$.subscribe((session) => {
      this.session = session;
      this.isLoadingSession = false; // Update loading state
    });

    this.supabase.authChanges((_, session) => {
      this.session = session;

      if (this.session) {
        this.updateProfile(this.session.user);
      }
    });
    this.authService.currentProfile.subscribe((prof) => {
      this.profile = prof as Profile;
    });

    this.initializeTypingObservable();
  }

  async updateProfile(user: User) {
    await this.authService.fetchAndUpdateProfile(user);
  }

  getMessages(): boolean | void {
    const allMessages = localStorage.getItem('messages');
    if (allMessages) {
      const messagesArray = JSON.parse(allMessages);
      const totalMessages = messagesArray.length;
      const start = Math.max(totalMessages - this.messagesSkip - 5, 0);
      const end = totalMessages - this.messagesSkip;
      if (end <= 0 && this.messagesSkip !== 0) {
        return false;
      }
      this.messagesLoading.next(true);

      const newMessages = messagesArray.slice(start, end);
      this.messagesSkip += 5;

      of(newMessages)
        .pipe(
          delay(1000),
          tap(() => this.messagesLoading.next(false))
        )
        .subscribe((messages) => {
          const currentMessages = this.messagesSubject.getValue();
          const combinedMessages = [...messages, ...currentMessages];
          this.messagesSubject.next(combinedMessages);
        });
    }
  }

  initializeTypingObservable() {
    this.typingSubject
      .pipe(
        switchMap(() => {
          this.typing.next(this.profile?.username || null);
          return timer(1500);
        }),
        map(() => null)
      )
      .subscribe((value) => {
        this.typing.next(value);
      });
  }

  currentUserTyping() {
    if (this.profile?.username) {
      this.typingSubject.next();
    }
  }

  sendMessage(content: string): void {
    if (this.profile) {
      const newMessage: Message = {
        username: this.profile.username,
        authorId: this.profile.id ?? '',
        content,
        id: Date.now() + Math.random(),
        profile_pic: this.profile.avatar_url,
      };
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, newMessage]);
      this.typing.next(null);
      localStorage.setItem(
        'messages',
        JSON.stringify(this.messagesSubject.value)
      );
    } else {
      console.error('Please log in');
    }
  }

  deleteMessage(id: number) {
    const currentMessages = this.messagesSubject.value;
    const newMessages = currentMessages.filter((message) => message.id !== id);
    this.messagesSubject.next(newMessages);
    localStorage.setItem('messages', JSON.stringify(newMessages));
    return newMessages;
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
    localStorage.removeItem('messages');
  }
}
