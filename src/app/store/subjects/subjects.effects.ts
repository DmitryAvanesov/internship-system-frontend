import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadSubjects, subjectsLoaded } from '@store/subjects/subjects.actions';
import { SubjectsApiService } from '@core/services/subjects-api.service';
import { combineLatest } from 'rxjs';

@Injectable()
export class SubjectsEffects {
  loadSubjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSubjects.type),
      switchMap(() =>
        combineLatest([
          this.subjectsApiService.getSubjects(),
          this.subjectsApiService.getSubjectInstances(),
          this.subjectsApiService.getSubjectAssessments(),
        ])
      ),
      map(([subjects, subjectInstances, subjectAssessments]) =>
        subjectsLoaded({ subjects, subjectInstances, subjectAssessments })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private subjectsApiService: SubjectsApiService
  ) {}
}
