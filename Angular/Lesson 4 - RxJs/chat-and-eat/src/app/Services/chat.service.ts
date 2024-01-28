import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Message {
  user: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  public messages$ = this.messagesSubject.asObservable();

  constructor() {}

  sendMessage(user: string, content: string): void {
    const newMessage: Message = { user, content };
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, newMessage]);
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
  }
}
