import { createFeatureSelector, createSelector } from '@ngrx/store';
import { interviewsAdapter } from '@store/interviews/interviews.reducer';
import { InterviewsState } from '@store/interviews/interviews.state';
import { AppState } from '../root.reducer';

const selectInterviews = createFeatureSelector<AppState, InterviewsState>(
  'interviews'
);

export const { selectAll: selectAllInterviews } =
  interviewsAdapter.getSelectors(selectInterviews);

export const selectInterviewsLoading = createSelector(
  selectInterviews,
  (state) => state.interviewsLoading
);

export const selectInterview = createSelector(
  selectInterviews,
  (state, props) => state.entities[props.id]
);
