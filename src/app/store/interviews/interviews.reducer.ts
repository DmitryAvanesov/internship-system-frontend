import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  interviewsLoaded,
  interviewUpserted,
  loadInterviews,
  loadInterviewsByStudent,
} from '@store/interviews/interviews.actions';
import { InterviewModel } from '@store/interviews/models/interview.model';
import { InterviewsState } from './interviews.state';

export const interviewsAdapter = createEntityAdapter<InterviewModel>();

const initialState: InterviewsState = interviewsAdapter.getInitialState({
  interviewsLoading: false,
});

export const interviewsReducer = createReducer<InterviewsState>(
  initialState,
  on(loadInterviews, (state) => ({ ...state, interviewsLoading: true })),
  on(loadInterviewsByStudent, (state) => ({
    ...state,
    interviewsLoading: true,
  })),
  on(interviewsLoaded, (state, { interviews }) =>
    interviewsAdapter.setAll(interviews, { ...state, interviewsLoading: false })
  ),
  on(interviewUpserted, (state, { interview }) =>
    interviewsAdapter.setOne(interview, state)
  )
);
