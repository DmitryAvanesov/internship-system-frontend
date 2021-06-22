import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectAssessmentModel } from '@store/subjects/models/subject-assessment.model';
import { SubjectInstanceModel } from '@store/subjects/models/subject-instance.model';
import { SubjectModel } from '@store/subjects/models/subject.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectsApiService {
  constructor(private http: HttpClient) {}

  getSubjects(): Observable<SubjectModel[]> {
    return this.http.get<SubjectModel[]>(`${environment.api}/Subjects`);
  }

  getSubjectInstances(): Observable<SubjectInstanceModel[]> {
    return this.http.get<SubjectInstanceModel[]>(
      `${environment.api}/SubjectInstances`
    );
  }

  getSubjectAssessments(): Observable<SubjectAssessmentModel[]> {
    return this.http.get<SubjectAssessmentModel[]>(
      `${environment.api}/SubjectAssessments`
    );
  }
}
