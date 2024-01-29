import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './Services/supabase.service';
import { Session } from '@supabase/supabase-js';
import { Subscription } from 'rxjs';

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

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.sessionSubscription = this.supabase.session$.subscribe((session) => {
      this.session = session;
      this.isLoadingSession = false; // Update loading state
      //console.log('Session:', session);
    });
  }

  ngOnDestroy() {
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }
  }
}
