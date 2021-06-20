import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutComponent} from '@core/layout/layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {DictionariesEffects} from '@store/dictionaries/dictionaries.effects';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '@store/root.reducer';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouteReuseStrategy} from '@angular/router';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([DictionariesEffects]),
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
