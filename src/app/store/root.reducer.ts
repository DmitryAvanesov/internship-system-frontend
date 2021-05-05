import { ActionReducerMap } from '@ngrx/store';
import { CompaniesState } from './companies/companies.state';
import { companiesReducer } from './companies/companies.reducer';
import { studentsReducer } from 'src/app/store/students/students.reducer';
import { StudentsState } from 'src/app/store/students/students.state';

export interface AppState {
  companies: CompaniesState;
  students: StudentsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  companies: companiesReducer,
  students: studentsReducer,
};
