import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../root.reducer';
import { StudentsState } from './students.state';
import { studentsAdapter } from './students.reducer';
import { SelectStudentProps } from '@store/students/models/select-student-props.model';

const selectStudents =
  createFeatureSelector<AppState, StudentsState>('students');

export const { selectAll: selectAllStudents } =
  studentsAdapter.getSelectors(selectStudents);

export const selectStudentsLoading = createSelector(
  selectStudents,
  (state) => state.studentsLoading
);

export const selectStudent = createSelector(
  selectStudents,
  (state: StudentsState, props: SelectStudentProps) => state.entities[props.id]
);
