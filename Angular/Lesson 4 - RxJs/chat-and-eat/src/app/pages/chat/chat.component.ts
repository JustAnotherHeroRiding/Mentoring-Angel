import { Component } from '@angular/core';
import { Session, User } from '@supabase/supabase-js';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { Message, ChatService } from 'src/app/Services/chat.service';
import { Profile, SupabaseService } from 'src/app/Services/supabase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: Message[] = [];
  newMessageContent: string = '';
  session: Session | undefined | null = undefined;
  isLoadingSession = true;

  constructor(
    private chatService: ChatService,
    private supabase: SupabaseService,
    private authService: AuthService
  ) {
    this.chatService.messages$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  ngOnInit() {}
  async updateProfile(user: User) {
    await this.authService.fetchAndUpdateProfile(user);
  }

  sendMessage(): void {
    if (this.newMessageContent.trim()) {
      this.chatService.sendMessage(this.newMessageContent.trim());
      this.newMessageContent = '';
    }
  }

  clearMessages(): void {
    this.chatService.clearMessages();
  }
}
