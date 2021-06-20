import { createAction, props } from '@ngrx/store';
import { CompanyModel } from './models/company.model';

export const loadCompanies = createAction('[Companies] Load companies');
export const companiesLoaded = createAction(
  '[Companies] Companies loaded',
  props<{ companies: CompanyModel[] }>()
);

export const changeCompany = createAction(
  '[Companies] Change company',
  props<{ company: CompanyModel }>()
);
export const createCompany = createAction(
  '[Companies] Create company',
  props<{ company: CompanyModel }>()
);
export const companyUpserted = createAction(
  '[Companies] Company changed',
  props<{ company: CompanyModel }>()
);
