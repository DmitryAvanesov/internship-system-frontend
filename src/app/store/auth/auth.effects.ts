import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logout, signedIn, signIn } from '@store/auth/auth.actions';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthApiService } from '@core/services/auth-api.service';
import { TransformedAuthResponse } from '@core/interfaces/auth-response.interface';
import { RolesEnum } from '@core/enums/roles.enum';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn.type),
      map((action: Action & { name: string; password: string }) => action),
      switchMap((action) => {
        console.log('here');
        let role: RolesEnum | undefined = undefined;
        return this.authApiService
          .signIn({ name: action.name, password: action.password }, 'Students')
          .pipe(
            tap(() => {
              role = RolesEnum.Student;
            }),
            map((response) => {
              return { response, role };
            }),
            catchError(() =>
              this.authApiService
                .signIn(
                  { name: action.name, password: action.password },
                  'Companies'
                )
                .pipe(
                  tap(() => {
                    role = RolesEnum.Company;
                  }),
                  map((response) => {
                    return { response, role };
                  }),
                  catchError(() =>
                    this.authApiService
                      .signIn(
                        { name: action.name, password: action.password },
                        'HITsWorkers'
                      )
                      .pipe(
                        tap(() => {
                          role = RolesEnum.Admin;
                        }),
                        map((response) => {
                          return { response, role };
                        })
                      )
                  )
                )
            )
          );
      }),
      map(({ response, role }) => {
        const newResponse: TransformedAuthResponse = {
          id: response.id,
          name: response.name,
          roles: [role],
        };
        localStorage.setItem('id', response.id);
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('role', RolesEnum[role]);
        console.log(newResponse);
        return signedIn({ response: newResponse });
      })
    )
  );

  success$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signedIn.type),
        map(() => {
          this.router.navigate(['/companies']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout.type),
        map(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          localStorage.removeItem('role');
          this.router.navigate(['/auth/sign-in']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authApiService: AuthApiService,
    private router: Router
  ) {}
}
