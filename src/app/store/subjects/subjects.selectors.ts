import { createFeatureSelector, createSelector } from '@ngrx/store';
import { subjectsAdapter } from '@store/subjects/subjects.reducer';
import { SubjectsState } from '@store/subjects/subjects.state';
import { AppState } from '../root.reducer';

const selectSubjects = createFeatureSelector<AppState, SubjectsState>(
  'subjects'
);

export const { selectAll: selectAllSubjects } =
  subjectsAdapter.getSelectors(selectSubjects);

export const selectSubjectsLoading = createSelector(
  selectSubjects,
  (state) => state.subjectsLoading
);

export const selectSubjectInstances = createSelector(
  selectSubjects,
  (state) => state.subjectInstances
);

export const selectSubjectAssessments = createSelector(
  selectSubjects,
  (state) => state.subjectAssessments
);
