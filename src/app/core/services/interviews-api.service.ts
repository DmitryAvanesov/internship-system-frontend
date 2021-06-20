import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterviewModel } from '@store/interviews/models/interviews.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterviewsApiService {
  constructor(private http: HttpClient) {}

  getInterviews(): Observable<InterviewModel[]> {
    return this.http.get<InterviewModel[]>(`${environment.api}/Interviews`);
  }

  getInterviewsByStudent(id: string): Observable<InterviewModel[]> {
    return this.http.get<InterviewModel[]>(
      `${environment.api}/Interviews/GetByStudent/${id}`
    );
  }
}
