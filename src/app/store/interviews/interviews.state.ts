import { EntityState } from '@ngrx/entity';
import { InterviewModel } from './models/interviews.model';

export interface InterviewsState extends EntityState<InterviewModel> {
  interviewsLoading: boolean;
}
