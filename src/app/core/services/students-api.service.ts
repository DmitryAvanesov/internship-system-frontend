import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { StudentModel } from 'src/app/store/students/models/student.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentsApiService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${environment.api}/Students`);
  }

  changeStudent(changedStudent: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(
      `${environment.api}/Students`,
      changedStudent
    );
  }
}
