import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PositionModel } from '@store/positions/models/position.model';
import { positionsAdapter } from '@store/positions/positions.reducer';
import { PositionsState } from '@store/positions/positions.state';
import { AppState } from '../root.reducer';

const selectPositions = createFeatureSelector<AppState, PositionsState>(
  'positions'
);

export const { selectAll: selectAllPositions } =
  positionsAdapter.getSelectors(selectPositions);

export const selectPositionsLoading = createSelector(
  selectPositions,
  (state) => state.positionsLoading
);

export const selectPosition = createSelector(
  selectPositions,
  (state, props) => state.entities[props.id]
);

export const selectPositionsByCompany = createSelector(
  selectPositions,
  (state, props) =>
    Object.values(state.entities).filter(
      (entity: PositionModel) => entity.companyId === props.companyId
    )
);
