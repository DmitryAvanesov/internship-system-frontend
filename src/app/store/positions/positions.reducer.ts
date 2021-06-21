import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PositionModel } from '@store/positions/models/position.model';
import {
  loadPositions,
  positionsLoaded,
} from '@store/positions/positions.actions';
import { PositionsState } from './positions.state';

export const positionsAdapter = createEntityAdapter<PositionModel>();

const initialState: PositionsState = positionsAdapter.getInitialState({
  positionsLoading: false,
});

export const positionsReducer = createReducer<PositionsState>(
  initialState,
  on(loadPositions, (state) => ({ ...state, positionsLoading: true })),
  on(positionsLoaded, (state, { positions }) =>
    positionsAdapter.setAll(positions, { ...state, positionsLoading: false })
  )
);
