import { createAction, props } from '@ngrx/store';
import { SubjectAssessmentModel } from '@store/subjects/models/subject-assessment.model';
import { SubjectInstanceModel } from '@store/subjects/models/subject-instance.model';
import { SubjectModel } from '@store/subjects/models/subject.model';

export const loadSubjects = createAction('[Subjects] Load subjects');
export const subjectsLoaded = createAction(
  '[Subjects] Subjects loaded',
  props<{
    subjects: SubjectModel[];
    subjectInstances: SubjectInstanceModel[];
    subjectAssessments: SubjectAssessmentModel[];
  }>()
);
