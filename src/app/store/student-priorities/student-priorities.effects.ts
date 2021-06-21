import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadStudents, studentsLoaded } from '@store/students/students.actions';
import { map, switchMap } from 'rxjs/operators';
import { StudentPrioritiesApiService } from '@core/services/student-priorities-api.service';
import {
  loadStudentPriorities,
  studentPrioritiesLoaded,
} from '@store/student-priorities/student-priorities.actions';

@Injectable()
export class StudentPrioritiesEffects {
  loadStudentPriorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudentPriorities.type),
      switchMap(() => this.studentPrioritiesApiService.getStudentPriorities()),
      map((studentPriorities) => studentPrioritiesLoaded({ studentPriorities }))
    )
  );

  constructor(
    private actions$: Actions,
    private studentPrioritiesApiService: StudentPrioritiesApiService
  ) {}
}
