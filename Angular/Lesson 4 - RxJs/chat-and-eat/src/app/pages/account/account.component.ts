import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthSession } from '@supabase/supabase-js';
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
    website: '',
    avatar_url: '',
    full_name: '',
  });

  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder
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
    await this.getProfile();

    const { username, website, avatar_url, full_name } = this.profile;
    this.updateProfileForm.patchValue({
      username,
      website,
      avatar_url,
      full_name,
    });
  }

  async getProfile() {
    try {
      this.loading = true;
      const { user } = this.session;
      const {
        data: profile,
        error,
        status,
      } = await this.supabase.profile(user);

      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        this.profile = profile as Profile;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loading = false;
    }
  }

  async updateProfile(): Promise<void> {
    try {
      this.loading = true;
      const { user } = this.session;

      const username = this.updateProfileForm.value.username as string;
      const website = this.updateProfileForm.value.website as string;
      const avatar_url = this.updateProfileForm.value.avatar_url as string;
      const full_name = this.updateProfileForm.value.full_name as string;

      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
        full_name,
      });
      if (error) throw error;
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
