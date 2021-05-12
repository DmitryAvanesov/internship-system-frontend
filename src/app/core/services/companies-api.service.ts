import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyModel } from '../../store/companies/models/company.model';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompaniesApiService {
  private api = environment.api;

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(`${this.api}/Companies`);
  }
}
