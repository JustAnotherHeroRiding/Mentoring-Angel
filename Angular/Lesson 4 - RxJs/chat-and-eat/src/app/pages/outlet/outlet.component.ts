import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  ngOnInit(): void {
    this.supabase.session$.subscribe((session) => {
      if (!session) {
        this.router.navigate(['/auth']);
      }
    });
  }
}
