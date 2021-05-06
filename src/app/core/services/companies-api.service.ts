import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyModel } from '../../store/companies/models/company.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompaniesApiService {
  constructor() {}

  getCompanies(): Observable<CompanyModel[]> {
    return of(
      new Array(7)
        .fill({
          userName: 'NTR',
        })
        .map((val, index) => ({
          ...val,
          id: index,
          score: Math.round(Math.random() * 500) / 100,
        }))
    ).pipe(delay(1000));
  }
}
