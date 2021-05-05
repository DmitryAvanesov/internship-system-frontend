import { ActionReducerMap } from '@ngrx/store';
import { CompaniesState } from './companies/companies.state';
import { companiesReducer } from './companies/companies.reducer';
import { studentsReducer } from 'src/app/store/students/students.reducer';
import { StudentsState } from 'src/app/store/students/students.state';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
  companies: CompaniesState;
  students: StudentsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  companies: companiesReducer,
  students: studentsReducer,
};
