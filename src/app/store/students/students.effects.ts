import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {studentsLoaded, loadStudents, changeStudent, studentChanged} from './students.actions';
import { map, switchMap } from 'rxjs/operators';
import { StudentsApiService } from '@core/services/students-api.service';
import {Action} from '@ngrx/store';
import {StudentModel} from '@store/students/models/student.model';

@Injectable()
export class StudentsEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents.type),
      switchMap(() => this.studentsApiService.getStudents()),
      map((students) => studentsLoaded({ students }))
    )
  );

  changeStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeStudent.type),
      switchMap((action: Action & {newStudent: StudentModel}) =>
        this.studentsApiService.changeStudent(action.newStudent)
      ),
      map((student) => studentChanged({newStudent: student}))
    )
  );

  constructor(
    private actions$: Actions,
    private studentsApiService: StudentsApiService
  ) {}
}
