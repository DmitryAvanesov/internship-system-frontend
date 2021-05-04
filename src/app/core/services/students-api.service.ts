import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { StudentModel } from 'src/app/store/students/models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsApiService {
  constructor() {}

  getStudents(): Observable<StudentModel[]> {
    return of(
      new Array(25)
        .fill({
          userName: 'Рома Выгон',
        })
        .map((val, index) => ({
          ...val,
          id: index,
        }))
    ).pipe(delay(1000));
  }
}
