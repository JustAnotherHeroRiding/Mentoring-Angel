import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from 'src/app/Services/supabase.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
})
export class OutletComponent implements OnInit {
  router = inject(Router);
  supabase = inject(SupabaseService);
  route = inject(ActivatedRoute);
  session = new BehaviorSubject<Session | null | undefined>(undefined);

  ngOnInit(): void {
    this.supabase.session$.subscribe((session) => {
      this.session.next(session);
    });
  }
}
