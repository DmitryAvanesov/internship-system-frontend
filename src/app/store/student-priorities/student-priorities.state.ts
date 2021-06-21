import { EntityState } from '@ngrx/entity';
import { PriorityModel } from '@store/models/priority.model';

export interface StudentPrioritiesState extends EntityState<PriorityModel> {}
