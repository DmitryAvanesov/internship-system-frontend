import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model';
import {Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpecializationsApiService {
  constructor(private http: HttpClient) {}

  getSpecializations(): Observable<DictionaryElementModel[]> {
    return this.http.get<DictionaryElementModel[]>(
      `${environment.api}/Specializations`
    );
  }

  changeSpecialization(newEntity: any): Observable<DictionaryElementModel> {
    return this.http.put<DictionaryElementModel>(
      `${environment.api}/Specializations`,
      {
        ...newEntity,
        users: [],
      }
    );
  }

  createNewSpecialization(newEntity: any): Observable<DictionaryElementModel> {
    return this.http.post<DictionaryElementModel>(
      `${environment.api}/Specializations`,
      {
        ...newEntity,
        users: [],
      }
    );
  }
}
