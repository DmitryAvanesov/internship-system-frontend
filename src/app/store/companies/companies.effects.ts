import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {changeCompany, companiesLoaded, companyUpserted, createCompany, loadCompanies} from './companies.actions';
import { CompaniesApiService } from '@core/services/companies-api.service';
import { map, switchMap } from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {CompanyModel} from '@store/companies/models/company.model';

@Injectable()
export class CompaniesEffects {
  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompanies.type),
      switchMap(() => this.companiesApiService.getCompanies()),
      map((companies) => companiesLoaded({ companies }))
    )
  );

  changeCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeCompany.type),
      switchMap((action: Action & {company: CompanyModel}) => this.companiesApiService.changeCompany(action.company)),
      map((newCompany) => companyUpserted({company: newCompany}))
    )
  );

  saveCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCompany.type),
      switchMap((action: Action & {company: CompanyModel}) => this.companiesApiService.createCompany(action.company)),
      map((newCompany) => companyUpserted({company: newCompany}))
    )
  );

  constructor(
    private actions$: Actions,
    private companiesApiService: CompaniesApiService
  ) {}
}
