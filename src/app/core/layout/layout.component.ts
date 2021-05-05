import { Component, OnInit } from '@angular/core';
import { RouteData } from 'src/app/store/router/models/route-data.model';
import { Store } from '@ngrx/store';
import { appRoutes } from 'src/app/app.routes';
import { selectRouteData } from 'src/app/store/router/router.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  routes = Object.keys(appRoutes).map((el) => appRoutes[el]);
  title: string;
  routeData$ = this.store.select(selectRouteData);

  constructor(private store: Store) {}

  ngOnInit() {
    this.routeData$.subscribe((data: RouteData) => {
      this.title = data?.title;
    });
  }
}
