import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { StudentsApiService } from '@core/services/students-api.service';
import {
  interviewsLoaded,
  loadInterviews,
} from '@store/interviews/interviews.actions';
import { InterviewsApiService } from '@core/services/interviews-api.service';

@Injectable()
export class InterviewsEffects {
  loadInterviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInterviews.type),
      switchMap((action: any) => {
        return this.interviewsApiService.getInterviewsByStudent(action.id);
      }),
      map((interviews) => interviewsLoaded({ interviews }))
    )
  );

  constructor(
    private actions$: Actions,
    private interviewsApiService: InterviewsApiService
  ) {}
}
