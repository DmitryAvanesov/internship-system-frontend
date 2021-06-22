import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SubjectModel } from '@store/subjects/models/subject.model';
import { loadSubjects, subjectsLoaded } from '@store/subjects/subjects.actions';
import { SubjectsState } from './subjects.state';

export const subjectsAdapter = createEntityAdapter<SubjectModel>();

const initialState: SubjectsState = subjectsAdapter.getInitialState({
  subjectsLoading: false,
  subjectInstances: [],
  subjectAssessments: [],
});

export const subjectsReducer = createReducer<SubjectsState>(
  initialState,
  on(loadSubjects, (state) => ({ ...state, subjectsLoading: true })),
  on(
    subjectsLoaded,
    (state, { subjects, subjectInstances, subjectAssessments }) => {
      return subjectsAdapter.setAll(subjects, {
        ...state,
        subjectsLoading: false,
        subjectInstances,
        subjectAssessments,
      });
    }
  )
);
