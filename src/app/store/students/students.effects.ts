import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { studentsLoaded, loadStudents } from './students.actions';
import { map, switchMap } from 'rxjs/operators';
import { StudentsApiService } from '@core/services/students-api.service';

@Injectable()
export class StudentsEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents.type),
      switchMap(() => this.studentsApiService.getStudents()),
      map((students) => studentsLoaded({ students }))
    )
  );

  constructor(
    private actions$: Actions,
    private studentsApiService: StudentsApiService
  ) {}
}
