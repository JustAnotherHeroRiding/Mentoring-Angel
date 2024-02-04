import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { Message, ChatService } from 'src/app/Services/chat.service';
import { Profile, SupabaseService } from 'src/app/Services/supabase.service';
import { CanComponentDeactivate } from 'src/guards/unsaved-changes.guard';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent
  implements OnInit, CanComponentDeactivate, AfterViewInit
{
  messages: Message[] = [];
  newMessageContent: string = '';

  isLoadingSession = true;

  isUserTyping = false;
  typingUser: string | null = null;
  messagesLoading = false;

  profile: Profile | null = null;
  userOnlineStatuses: Record<string, boolean> = {};

  private statusChangeSub?: Subscription;
  private initialStatusesLoaded = false;

  @ViewChild('messageContainer', { read: ViewContainerRef })
  messageContainer!: ViewContainerRef;
  @ViewChild('messageTemplate') messageTemplate!: TemplateRef<any>;

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private supabase: SupabaseService
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

    this.supabase.getUserStatuses().subscribe((statuses) => {
      if (statuses) {
        this.userOnlineStatuses = statuses;
        this.initialStatusesLoaded = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.statusChangeSub = this.supabase.userStatusChange$.subscribe(
      (profile) => {
        if (this.initialStatusesLoaded && profile.id !== this.profile?.id) {
          const notification = `${profile.username} is now ${
            profile.is_online ? 'Online' : 'Offline'
          }`;
          const view = this.messageContainer.createEmbeddedView(
            this.messageTemplate,
            { $implicit: notification }
          );
          setTimeout(() => {
            this.messageContainer.remove(this.messageContainer.indexOf(view));
          }, 4000);
        }
      }
    );
  }

  canDeactivate() {
    return (
      this.newMessageContent === '' ||
      !this.profile ||
      confirm('You have unsaved changes. Are you sure you want to leave?')
    );
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

  ngOnDestroy() {
    /* this.statusChangeSub?.unsubscribe();
    this.chatService.typing.unsubscribe(); */
  }
}
