import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {companiesLoaded, loadCompanies} from './companies.actions';
import {CompaniesApiService} from '@core/services/companies-api.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class CompaniesEffects {
  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompanies.type),
      switchMap(() => this.companiesApiService.getCompanies()),
      map((companies) => companiesLoaded({companies}))
    )
  );

  constructor(private actions$: Actions, private companiesApiService: CompaniesApiService) {}

}
