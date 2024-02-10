import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { Message, ChatService } from 'src/app/Services/chat.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { Profile, SupabaseService } from 'src/app/Services/supabase.service';
import { scrollToBottom, scrollToTop } from 'src/app/utils/scrollTo';
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
  shouldScroll = false;

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

  @ViewChild('messageHistory') private messageHistory!: ElementRef;

  private destroy$ = new Subject<void>();

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private supabase: SupabaseService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.chatService.getMessages();
    this.chatService.messagesLoading
      .pipe(takeUntil(this.destroy$))
      .subscribe((loading) => {
        this.messagesLoading = loading;
      });

    this.chatService.messages$
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages) => {
        this.messages = messages;
        this.shouldScroll && scrollToBottom(this.messageHistory);
      });

    this.chatService.typing
      .pipe(takeUntil(this.destroy$))
      .subscribe((username) => {
        this.typingUser = username;
        this.isUserTyping = !!username;
      });

    this.authService.currentProfile
      .pipe(takeUntil(this.destroy$))
      .subscribe((prof) => {
        this.profile = prof as Profile;
      });

    this.supabase
      .getUserStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe((statuses) => {
        if (statuses) {
          this.userOnlineStatuses = statuses;
          this.initialStatusesLoaded = true;
        }
      });
  }

  ngAfterViewInit(): void {
    this.statusChangeSub = this.supabase.userStatusChange$
      .pipe(takeUntil(this.destroy$))
      .subscribe((profile) => {
        if (this.initialStatusesLoaded && profile.id !== this.profile?.id) {
          this.notificationService.showNotification(
            `${profile.username} is now ${
              profile.is_online ? 'Online' : 'Offline'
            }`,
            'info'
          );
          setTimeout(() => {
            this.notificationService.clearNotification();
          }, 4000);
        }
      });
  }

  canDeactivate() {
    console.log(this.newMessageContent)
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
    if (this.chatService.getMessages() === false) {
      this.notificationService.showNotification(
        'No more messages to load',
        'info'
      );
      setTimeout(() => {
        this.notificationService.clearNotification();
      }, 4000);
    } else {
      this.shouldScroll = true;
    }
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
    this.destroy$.next();
    this.destroy$.complete();
  }
}
