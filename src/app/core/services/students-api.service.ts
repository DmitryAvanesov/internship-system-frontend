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
          userName: 'Иван Павлов',
        })
        .map((val, index) => ({
          ...val,
          id: index,
          score: Math.round(Math.random() * 500) / 100,
        }))
    ).pipe(delay(1000));
  }
}
