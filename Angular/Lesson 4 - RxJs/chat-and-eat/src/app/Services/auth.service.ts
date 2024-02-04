import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile, SupabaseService } from './supabase.service';
import { User } from '@supabase/supabase-js';
import { AuthChangesService } from './auth-changes.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private profileSource = new BehaviorSubject<Profile | null>(null);
  currentProfile = this.profileSource.asObservable();

  constructor(
    private supabase: SupabaseService,
    private authChangeService: AuthChangesService
  ) {
    this.listenToSignOutEvent;
  }
  private listenToSignOutEvent(): void {
    this.authChangeService.signOutEvent.subscribe(() => {
      this.updateProfile(null);
    });
  }

  async fetchAndUpdateProfile(user: User) {
    const { data: profile, error } = await this.supabase.profile(user);
    if (error) {
      throw error;
    }
    if (profile) {
      this.profileSource.next(profile as Profile);
    }

    this.profileSource.next(profile as Profile);
  }

  async updateProfile(profile: Profile | null): Promise<void> {
    this.profileSource.next(profile);
  }
}
