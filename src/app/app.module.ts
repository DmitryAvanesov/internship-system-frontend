import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '@core/layout/layout/layout.component';
import { HeaderComponent } from '@core/layout/header/header.component';
import { MenuComponent } from '@core/layout/menu/menu.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/root.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
