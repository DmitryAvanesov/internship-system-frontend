import { createAction, props } from '@ngrx/store';
import { InterviewModel } from '@store/interviews/models/interview.model';

export const loadInterviews = createAction(
  '[Interviews] Load interviews',
  props<{ id: string }>()
);
export const interviewsLoaded = createAction(
  '[Interviews] Interviews loaded',
  props<{ interviews: InterviewModel[] }>()
);
export const interviewAdded = createAction(
  '[Interviews] Interview added',
  props<{ interview: InterviewModel }>()
);
