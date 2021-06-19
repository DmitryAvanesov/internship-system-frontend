import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouteData } from 'src/app/store/router/models/route-data.model';
import { Store } from '@ngrx/store';
import { appRoutes } from 'src/app/app.routes';
import { selectRouteData } from 'src/app/store/router/router.selectors';
import {isUserLoggedIn, selectUserRoles} from '@store/auth/auth.selectors';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {accountRolesLinks} from '@core/consts/account-roles-links';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  routes = Object.keys(appRoutes).map((el) => appRoutes[el]).filter((el) => !el.data.hidden);
  title: string;
  routeData$ = this.store.select(selectRouteData);
  isUserLoggedIn$ = this.store.select(isUserLoggedIn);
  userRoles$ = this.store.select(selectUserRoles);
  accountLink = '';

  private unsubscribe = new Subject();

  constructor(private store: Store) {}

  ngOnInit() {
    this.routeData$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: RouteData) => {
        this.title = data?.title;
      });
    this.userRoles$
      .pipe(
        filter(el => !!el.length),
        takeUntil(this.unsubscribe)
      )
      .subscribe((roles) => {
        this.accountLink = accountRolesLinks[roles[0]];
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
