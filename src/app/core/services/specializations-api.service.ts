import { Injectable } from '@angular/core';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpecializationsApiService {

  constructor() { }

  getSpecializations(): Observable<DictionaryElementModel[]> {
    return of(
      new Array(7)
        .fill({
          name: (Math.round(Math.random() * 500) / 100).toString()
        })
        .map((val, index) => ({
          ...val,
          id: index.toString(),
        }))
    ).pipe(delay(1000));
  }

  changeTechnology(newEntity: any): Observable<DictionaryElementModel> {
    return of(newEntity);
  }

  createNewTechnology(newEntity: any): Observable<DictionaryElementModel> {
    return of(newEntity);
  }
}
