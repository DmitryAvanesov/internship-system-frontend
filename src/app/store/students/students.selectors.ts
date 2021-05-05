import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../root.reducer';
import { StudentsState } from './students.state';
import { studentsAdapter } from './students.reducer';

const selectStudents = createFeatureSelector<AppState, StudentsState>(
  'students'
);

export const { selectAll: selectAllStudents } = studentsAdapter.getSelectors(
  selectStudents
);

export const selectStudentsLoading = createSelector(
  selectStudents,
  (state) => state.studentsLoading
);
