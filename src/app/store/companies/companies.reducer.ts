import { createEntityAdapter } from '@ngrx/entity';
import { CompanyModel } from './models/company.model';
import { createReducer, on } from '@ngrx/store';
import { CompaniesState } from './companies.state';
import { companiesLoaded, loadCompanies } from './companies.actions';

export const companiesAdapter = createEntityAdapter<CompanyModel>();

const initialState: CompaniesState = companiesAdapter.getInitialState({
  companiesLoading: false,
});

export const companiesReducer = createReducer<CompaniesState>(
  initialState,
  on(loadCompanies, (state) => ({ ...state, companiesLoading: true })),
  on(companiesLoaded, (state, { companies }) =>
    companiesAdapter.setAll(companies, { ...state, companiesLoading: false })
  )
);
