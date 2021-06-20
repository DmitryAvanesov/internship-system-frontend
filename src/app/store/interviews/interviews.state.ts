import { EntityState } from '@ngrx/entity';
import { InterviewModel } from './models/interview.model';

export interface InterviewsState extends EntityState<InterviewModel> {
  interviewsLoading: boolean;
}
