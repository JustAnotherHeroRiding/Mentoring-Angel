import { Component, OnInit } from '@angular/core';
import { Profile, SupabaseService } from './Services/supabase.service';
import { Session, User } from '@supabase/supabase-js';
import { Subscription } from 'rxjs';
import { ChatService } from './Services/chat.service';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chat-and-eat';

  session: Session | undefined | null = undefined;
  private sessionSubscription?: Subscription;
  isLoadingSession = true;
  private profile?: Profile;

  constructor(
    private readonly supabase: SupabaseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
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

  ngOnDestroy() {
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }
  }
}
