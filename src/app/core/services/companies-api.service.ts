import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {CompanyModel} from '../../store/companies/models/company.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesApiService {

  constructor() { }

  getCompanies(): Observable<CompanyModel[]> {
    return of([]).pipe(delay(1000));
  }
}
