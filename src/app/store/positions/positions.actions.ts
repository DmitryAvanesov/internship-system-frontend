import { createAction, props } from '@ngrx/store';
import { PositionModel } from '@store/positions/models/position.model';

export const loadPositions = createAction('[Positions] Load positions');
export const positionsLoaded = createAction(
  '[Positions] Positions loaded',
  props<{ positions: PositionModel[] }>()
);
