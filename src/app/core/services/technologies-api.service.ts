import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesApiService {

  constructor() {
  }

  getTechnologies(): Observable<DictionaryElementModel[]> {
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

  createNewTechnology(newTechnology: DictionaryElementModel): Observable<DictionaryElementModel> {
    return of(newTechnology);
  }

  changeTechnology(technology: DictionaryElementModel): Observable<DictionaryElementModel> {
    return of(technology);
  }
}
