import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  RouteConfigLoadEnd,
  Router,
} from '@angular/router';
import { RouteData } from '@core/types/route-data.interface';
import { filter, switchMap, take } from 'rxjs/operators';
import { appRoutes } from 'src/app/app.routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  routes = Object.keys(appRoutes).map((el) => appRoutes[el]);
  title: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((routeEvent) => routeEvent instanceof NavigationEnd),
        switchMap(() => this.route.firstChild.data)
      )
      .subscribe((data: RouteData) => {
        this.title = data.title;
      });
  }
}
