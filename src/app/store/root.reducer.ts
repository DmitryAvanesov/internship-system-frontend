import {ActionReducerMap} from '@ngrx/store';
import {CompaniesState} from './companies/companies.state';
import {companiesReducer} from './companies/companies.reducer';

export interface AppState {
  companies: CompaniesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  companies: companiesReducer,
};
