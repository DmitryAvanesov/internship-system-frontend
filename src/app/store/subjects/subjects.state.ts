import { EntityState } from '@ngrx/entity';
import { SubjectAssessmentModel } from '@store/subjects/models/subject-assessment.model';
import { SubjectInstanceModel } from '@store/subjects/models/subject-instance.model';
import { SubjectModel } from '@store/subjects/models/subject.model';

export interface SubjectsState extends EntityState<SubjectModel> {
  subjectsLoading: boolean;
  subjectInstances: SubjectInstanceModel[];
  subjectAssessments: SubjectAssessmentModel[];
}
