import { Component, OnInit } from '@angular/core';
import { Session, User } from '@supabase/supabase-js';
import { AuthService } from 'src/app/Services/auth.service';
import { Message, ChatService } from 'src/app/Services/chat.service';
import { Profile } from 'src/app/Services/supabase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessageContent: string = '';

  session: Session | undefined | null = undefined;
  isLoadingSession = true;

  isUserTyping = false;
  typingUser: string | null = null;
  messagesLoading = false;

  profile: Profile | null = null;

  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chatService.getMessages();
    this.chatService.messagesLoading.subscribe((loading) => {
      this.messagesLoading = loading;
    });

    this.chatService.messages$.subscribe((messages) => {
      this.messages = messages;
    });

    this.chatService.typing.subscribe((username) => {
      this.typingUser = username;
      this.isUserTyping = !!username;
    });

    this.authService.currentProfile.subscribe((prof) => {
      this.profile = prof as Profile;
    });
  }
  onTextareaInput(event: Event): void {
    this.chatService.currentUserTyping();
    const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  sendMessage(): void {
    if (this.newMessageContent.trim()) {
      this.chatService.sendMessage(this.newMessageContent.trim());
      this.newMessageContent = '';
      this.resetTextareaHeight();
    }
  }

  loadMore() {
    this.chatService.getMessages();
  }

  resetTextareaHeight(): void {
    const textarea = document.querySelector(
      '.new-message'
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto';
    }
  }

  clearMessages(): void {
    this.chatService.clearMessages();
  }
}