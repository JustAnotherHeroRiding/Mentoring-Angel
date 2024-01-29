import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
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
  }

  async updateProfile(user: User) {
    await this.authService.fetchAndUpdateProfile(user);
  }

  getMessages(): void {
    const allMessages = localStorage.getItem('messages');
    this.messagesSubject.next(JSON.parse(allMessages || '[]'));
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
