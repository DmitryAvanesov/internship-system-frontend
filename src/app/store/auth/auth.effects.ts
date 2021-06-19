import {Actions, createEffect, ofType} from '@ngrx/effects';
import {logout, signedInError, signedInSuccessful, signIn} from '@store/auth/auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthApiService} from '@core/services/auth-api.service';
import {Action} from '@ngrx/store';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn.type),
      switchMap((action: Action & {email: string, passowrd: string}) =>
        this.authApiService.signIn(action.email, action.passowrd).pipe(
          map((res) => signedInSuccessful({id: res.id, role: res.role})),
          catchError((err) => of(signedInError()))
        )
      )
    )
  );

  success$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signedInSuccessful.type),
      map(() => {
        this.router.navigate(['/companies']);
      })
    ), {dispatch: false},
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout.type),
      map(() => {
        this.router.navigate(['/auth/sign-in']);
      })
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authApiService: AuthApiService,
  ) {
  }
}
