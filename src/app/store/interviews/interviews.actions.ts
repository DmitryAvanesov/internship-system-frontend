import { createAction, props } from '@ngrx/store';
import { InterviewModel } from '@store/interviews/models/interviews.model';

export const loadInterviews = createAction(
  '[Interviews] Load interviews',
  props<{ id: string }>()
);
export const interviewsLoaded = createAction(
  '[Interviews] Interviews loaded',
  props<{ interviews: InterviewModel[] }>()
);
