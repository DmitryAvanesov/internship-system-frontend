import { ActionReducerMap } from '@ngrx/store';
import { CompaniesState } from './companies/companies.state';
import { companiesReducer } from './companies/companies.reducer';
import { studentsReducer } from 'src/app/store/students/students.reducer';
import { StudentsState } from 'src/app/store/students/students.state';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { DictionariesState } from '@store/dictionaries/dictionaries.state';
import { dictionariesReducer } from '@store/dictionaries/dictionaries.reducer';
import { AuthState } from '@store/auth/auth.state';
import { authReducer } from '@store/auth/auth.reducer';

export interface AppState {
  router: RouterReducerState;
  companies: CompaniesState;
  students: StudentsState;
  dictionaries: DictionariesState;
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  companies: companiesReducer,
  students: studentsReducer,
  dictionaries: dictionariesReducer,
  auth: authReducer,
};
