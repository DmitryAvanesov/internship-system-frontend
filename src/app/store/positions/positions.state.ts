import { EntityState } from '@ngrx/entity';
import { PositionModel } from '@store/positions/models/position.model';

export interface PositionsState extends EntityState<PositionModel> {
  positionsLoading: boolean;
}
