import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthSession } from '@supabase/supabase-js';
import { AuthService } from 'src/app/Services/auth.service';
import { Profile, SupabaseService } from 'src/app/Services/supabase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  loading = false;
  profile!: Profile;

  @Input()
  session!: AuthSession;

  updateProfileForm = this.formBuilder.group({
    username: '',
    avatar_url: '',
    full_name: '',
    is_online: false,
  });

  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  get avatarUrl() {
    return this.updateProfileForm.value.avatar_url as string;
  }

  async updateAvatar(event: string): Promise<void> {
    this.updateProfileForm.patchValue({
      avatar_url: event,
    });
    await this.updateProfile();
  }
  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.authService.fetchAndUpdateProfile(this.session.user);
    this.authService.currentProfile.subscribe((profile) => {
      if (profile) {
        this.profile = profile;
        const { username, avatar_url, full_name, is_online } = this.profile;
        this.updateProfileForm.patchValue({
          username,
          avatar_url,
          full_name,
          is_online,
        });
      }
      this.loading = false;
    });
  }

  async updateProfile(): Promise<void> {
    try {
      this.loading = true;
      const { user } = this.session;

      const username = this.updateProfileForm.value.username as string;
      const avatar_url = this.updateProfileForm.value.avatar_url as string;
      const full_name = this.updateProfileForm.value.full_name as string;
      const is_online = this.updateProfileForm.value.is_online as boolean;
      const updatedProfile: Profile = {
        id: user.id,
        username,
        avatar_url,
        full_name,
        is_online,
      };
      const { error } = await this.supabase.updateProfile(updatedProfile);
      if (error) throw error;
      this.profile = updatedProfile;
      this.authService.updateProfile(this.profile);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loading = false;
    }
  }

  async signOut() {
    await this.supabase.signOut();
  }
}
