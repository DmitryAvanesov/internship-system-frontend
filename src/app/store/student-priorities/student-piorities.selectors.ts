import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '@store/root.reducer';
import { StudentPrioritiesState } from '@store/student-priorities/student-priorities.state';
import { studentPrioritiesAdapter } from '@store/student-priorities/student-priorities.reducer';

const selectStudentPriorities = createFeatureSelector<
  AppState,
  StudentPrioritiesState
>('studentPriorities');

export const {
  selectAll: selectAllStudentPriorities,
  selectEntities: selectStudentPriorityEntities,
} = studentPrioritiesAdapter.getSelectors(selectStudentPriorities);
