import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriorityModel } from '@store/models/priority.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentPrioritiesApiService {
  getStudentPriorities(): Observable<PriorityModel[]> {
    return this.httpClient.get<PriorityModel[]>(
      `${environment.api}/PriorityStudents`
    );
  }

  constructor(private httpClient: HttpClient) {}
}
