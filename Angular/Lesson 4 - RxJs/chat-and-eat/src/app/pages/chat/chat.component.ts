import { Component } from '@angular/core';
import { Message, ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: Message[] = [];
  newMessageContent: string = '';
  userName: string = 'Kristijan';

  constructor(private chatService: ChatService) {
    this.chatService.messages$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage(): void {
    if (this.newMessageContent.trim()) {
      this.chatService.sendMessage(
        this.userName,
        this.newMessageContent.trim()
      );
      this.newMessageContent = '';
    }
  }

  clearMessages(): void {
    this.chatService.clearMessages();
  }
}
