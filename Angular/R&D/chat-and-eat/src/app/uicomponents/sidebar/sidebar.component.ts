import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Services/supabase.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  homeRoute: string = '/';
  constructor(private router: Router, private supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.session$.subscribe((session) => {
      this.homeRoute = session ? '/home' : '/';
    });
  }
}
