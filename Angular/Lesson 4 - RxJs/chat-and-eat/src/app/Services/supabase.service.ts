import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/env';
import { AuthChangesService } from './auth-changes.service';
export interface Profile {
  id?: string;
  username: string;
  avatar_url: string;
  full_name: string;
  is_online: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private _session = new BehaviorSubject<AuthSession | undefined | null>(
    undefined
  );

  private userStatuses = new BehaviorSubject<Record<string, boolean>>({});

  constructor(private authChangeService: AuthChangesService) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey
    );
    this.refreshSession();

    this.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        this.updateOnlineStatus(session.user.id, true).catch(console.error);
      } else if (event === 'SIGNED_OUT' && session?.user) {
        this.updateOnlineStatus(session.user.id, false).catch(console.error);
      }
    });
    this.fetchAllOnlineStatuses().then(() => {
      this.subscribeToUserStatus();
    });
  }

  private refreshSession() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session.next(data.session);
    });
  }
  get session$(): Observable<Session | null | undefined> {
    return this._session.asObservable();
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`id, username, avatar_url, full_name, is_online`)
      .eq('id', user.id)
      .single();
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }
  async updateOnlineStatus(userId: string, isOnline: boolean): Promise<void> {
    const { error } = await this.supabase
      .from('profiles')
      .update({ is_online: isOnline })
      .eq('id', userId);

    if (error) throw error;
  }

  signIn(email: string, password?: string) {
    if (password) {
      // Sign in with email and password
      return this.supabase.auth.signInWithPassword({ email, password });
    } else {
      // Sign in with magic link
      return this.supabase.auth.signInWithOtp({ email });
    }
  }

  async signOut() {
    const userRes = await this.supabase.auth.getUser();
    const user = userRes.data.user;

    if (user) {
      await this.updateOnlineStatus(user.id, false).catch(console.error);
    }

    return this.supabase.auth.signOut().then((res) => {
      if (res.error) throw res.error;
      this._session.next(null);
      this.authChangeService.signOutEvent.emit();
    });
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    };

    return this.supabase.from('profiles').upsert(update);
  }
  async signUp(email: string, password: string, name: string) {
    // Attempt to sign up the user
    const { data: user, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    // Handle any errors during signup
    if (error) throw error;

    // If signup is successful, create or update the user's profile
    if (user.user) {
      const profile: Profile = {
        id: user.user.id,
        username: name,
        avatar_url: '', // Default or empty value
        full_name: name, // Default or empty value
        is_online: true, // Default or empty value
      };

      await this.updateProfile(profile);
    }

    return { user, error };
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }

  subscribeToUserStatus() {
    this.supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
        },
        (payload) => {
          console.log(payload);
          const newProfile = payload.new as Profile;

          this.updateLocalUserStatus(
            newProfile.id as string,
            newProfile.is_online
          );
        }
      )
      .subscribe();
  }

  updateLocalUserStatus(userId: string, isOnline: boolean) {
    const currentStatuses = this.userStatuses.value;
    const updatedStatuses = { ...currentStatuses, [userId]: isOnline };
    this.userStatuses.next(updatedStatuses);
  }
  async fetchAllOnlineStatuses() {
    try {
      const { data, error } = await this.supabase
        .from('profiles')
        .select('id, is_online');

      if (error) throw new Error(error.message);
      if (data) {
        const statuses = data.reduce(
          (
            acc: Record<string, boolean>,
            profile: { id: string; is_online: boolean }
          ) => {
            acc[profile.id] = profile.is_online;
            return acc;
          },
          {}
        );
        this.userStatuses.next(statuses);
      }
    } catch (error) {
      console.error('Failed to fetch online statuses:', error);
    }
  }

  getUserStatuses() {
    return this.userStatuses.asObservable();
  }
}
