import { Component } from '@angular/core';
import { appRoutes } from 'src/app/app.routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  routes = Object.keys(appRoutes).map((el) => appRoutes[el]);
  constructor() { }

}
