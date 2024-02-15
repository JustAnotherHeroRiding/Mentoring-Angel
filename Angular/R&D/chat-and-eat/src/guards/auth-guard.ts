import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { map, of, take, tap } from 'rxjs';
import { SupabaseService } from 'src/app/Services/supabase.service';

export const AuthGuardImpl: CanActivateChildFn = (route, state) => {
  const supabase = inject(SupabaseService);
  const router = inject(Router);

  return supabase.session$.pipe(
    take(1),
    map((session) => {
      const isLoggedIn = session !== null;
      if (!isLoggedIn) {
        router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
      }
      return isLoggedIn;
    })
  );
};
