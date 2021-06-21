import { createAction, props } from '@ngrx/store';
import { InterviewModel } from '@store/interviews/models/interview.model';

export const loadInterviews = createAction('[Interviews] Load interviews');
export const loadInterviewsByStudent = createAction(
  '[Interviews] Load interviews by student',
  props<{ id: string }>()
);
export const interviewsLoaded = createAction(
  '[Interviews] Interviews loaded',
  props<{ interviews: InterviewModel[] }>()
);
export const interviewAdded = createAction(
  '[Interviews] Interview added',
  props<{ interview: Partial<InterviewModel> }>()
);
export const interviewChanged = createAction(
  '[Interviews] Interview changed',
  props<{ interview: InterviewModel }>()
);
export const interviewUpserted = createAction(
  '[Interviews] Interview upserted',
  props<{ interview: InterviewModel }>()
);
