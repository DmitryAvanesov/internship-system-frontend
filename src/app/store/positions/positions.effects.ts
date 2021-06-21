import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { PositionsApiService } from '@core/services/positions-api.service';
import {
  loadPositions,
  positionsLoaded,
} from '@store/positions/positions.actions';

@Injectable()
export class PositionsEffects {
  loadPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPositions.type),
      switchMap(() => this.positionsApiService.getPositions()),
      map((positions) => positionsLoaded({ positions }))
    )
  );

  constructor(
    private actions$: Actions,
    private positionsApiService: PositionsApiService
  ) {}
}
