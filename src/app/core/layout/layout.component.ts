import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { isUserLoggedIn, selectUserRoles } from '@store/auth/auth.selectors';
import { appRoutes } from '../../app.routes';
import { selectRouteData } from '@store/router/router.selectors';
import { Store } from '@ngrx/store';
import { RouteData } from '@store/router/models/route-data.model';
import { Subject } from 'rxjs';
import { accountRolesLinks } from '@core/consts/account-roles-links';
import { logout } from '@store/auth/auth.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  routes = Object.keys(appRoutes)
    .map((el) => appRoutes[el])
    .filter((el) => !el.data.hidden);
  title: string;
  routeData$ = this.store.select(selectRouteData);
  isUserLoggedIn$ = this.store.select(isUserLoggedIn);
  userRoles$ = this.store.select(selectUserRoles);
  accountLink = '';

  showToolbar = true;

  private unsubscribe = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.routeData$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: RouteData) => {
        this.title = data?.title;
        this.showToolbar = data?.title !== 'Авторизация';
      });
    this.userRoles$
      .pipe(
        filter((el) => !!el.length),
        takeUntil(this.unsubscribe)
      )
      .subscribe((roles) => {
        this.accountLink = accountRolesLinks[roles[0]];
      });
  }

  logout() {
    this.store.dispatch(logout());
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
