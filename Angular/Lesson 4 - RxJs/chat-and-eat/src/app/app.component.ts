import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './Services/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chat-and-eat';

  session = this.supabase.session;
  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
