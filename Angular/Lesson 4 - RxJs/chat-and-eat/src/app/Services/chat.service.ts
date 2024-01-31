import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  mapTo,
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
  username: string;
  content: string;
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

  typingDebounced = this.typing.pipe(
    debounceTime(500), // Adjust time as needed
    distinctUntilChanged()
  );

  private sessionSubscription?: Subscription;
  isLoadingSession = true;
  private profile?: Profile;

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

  getMessages(): void {
    const allMessages = localStorage.getItem('messages');
    if (allMessages) {
      const messagesArray = JSON.parse(allMessages);
      const latestFiveMessages = messagesArray.slice(-5); // Get the last 5 messages
      this.messagesSubject.next(latestFiveMessages);
    } else {
      this.messagesSubject.next([]);
    }
  }

  initializeTypingObservable() {
    this.typingSubject
      .pipe(
        switchMap(() => {
          this.typing.next(this.profile?.username || null); // User started typing
          return timer(3000); // Wait for 500ms of inactivity
        }),
        mapTo(null) // After 500ms without typing, consider the user has stopped typing
      )
      .subscribe((value) => {
        this.typing.next(value); // Emit null when the user stops typing
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
        content,
        id: Date.now() + Math.random(),
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
