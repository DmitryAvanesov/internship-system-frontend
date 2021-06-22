import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { isUserLoggedIn } from '@store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { signedIn } from '@store/auth/auth.actions';
import { RolesEnum } from '@core/enums/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class FirstTimeGuardGuard implements CanActivate, CanLoad {
  private isLoggedIn$ = this.store.select(isUserLoggedIn);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          const token = localStorage.getItem('token');
          const role = localStorage.getItem('role');
          const id = localStorage.getItem('id');
          if (!token || !role || !id) {
            return true;
          } else {
            this.store.dispatch(
              signedIn({ response: { name: '', id, roles: [RolesEnum[role]] } })
            );
            return true;
          }
        }
        return true;
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          const token = localStorage.getItem('token');
          const role = localStorage.getItem('role');
          const id = localStorage.getItem('id');
          if (!token || !role || !id) {
            return true;
          } else {
            this.store.dispatch(
              signedIn({ response: { name: '', id, roles: [RolesEnum[role]] } })
            );
            return true;
          }
        }
        return true;
      })
    );
  }

  constructor(private store: Store, private router: Router) {}
}
