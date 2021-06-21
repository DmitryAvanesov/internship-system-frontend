import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  interviewAdded,
  interviewChanged,
  interviewsLoaded,
  interviewUpserted,
  loadInterviews,
  loadInterviewsByStudent,
} from '@store/interviews/interviews.actions';
import { InterviewsApiService } from '@core/services/interviews-api.service';

@Injectable()
export class InterviewsEffects {
  loadInterviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInterviews.type, loadInterviewsByStudent.type),
      switchMap((action: any) =>
        action.type === loadInterviews.type
          ? this.interviewsApiService.getInterviews()
          : this.interviewsApiService.getInterviewsByStudent(action.id)
      ),
      map((interviews) => interviewsLoaded({ interviews }))
    )
  );

  interviewAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interviewAdded.type),
      switchMap((action: any) =>
        this.interviewsApiService.postInterview(action.interview)
      ),
      map((interview) => interviewUpserted({ interview }))
    )
  );

  interviewchanged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interviewChanged.type),
      switchMap((action: any) =>
        this.interviewsApiService.putInterview(action.interview)
      ),
      map((interview) => interviewUpserted({ interview }))
    )
  );

  constructor(
    private actions$: Actions,
    private interviewsApiService: InterviewsApiService
  ) {}
}
