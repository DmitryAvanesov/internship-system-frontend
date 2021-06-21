import { createEntityAdapter } from '@ngrx/entity';
import { PriorityModel } from '@store/models/priority.model';
import { StudentPrioritiesState } from '@store/student-priorities/student-priorities.state';
import { createReducer, on } from '@ngrx/store';
import { studentPrioritiesLoaded } from '@store/student-priorities/student-priorities.actions';

export const studentPrioritiesAdapter = createEntityAdapter<PriorityModel>();
const initialState: StudentPrioritiesState =
  studentPrioritiesAdapter.getInitialState({});
export const studentPrioritiesReducer = createReducer<StudentPrioritiesState>(
  initialState,
  on(studentPrioritiesLoaded, (state, { studentPriorities }) =>
    studentPrioritiesAdapter.setAll(studentPriorities, state)
  )
);
