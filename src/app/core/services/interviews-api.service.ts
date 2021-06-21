import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterviewModel } from '@store/interviews/models/interview.model';
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

  postInterview(
    interview: Partial<InterviewModel>
  ): Observable<InterviewModel> {
    return this.http.post<InterviewModel>(
      `${environment.api}/Interviews`,
      interview
    );
  }

  putInterview(interview: InterviewModel): Observable<InterviewModel> {
    return this.http.put<InterviewModel>(
      `${environment.api}/Interviews`,
      interview
    );
  }
}
