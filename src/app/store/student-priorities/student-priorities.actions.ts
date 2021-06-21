import { createAction, props } from '@ngrx/store';
import { PriorityModel } from '@store/models/priority.model';

export const loadStudentPriorities = createAction(
  '[StudentPriorities] Load student priorities'
);
export const studentPrioritiesLoaded = createAction(
  '[StudentPriorities] Student priorities loaded',
  props<{ studentPriorities: PriorityModel[] }>()
);
