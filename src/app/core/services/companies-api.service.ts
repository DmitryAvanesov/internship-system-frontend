import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyModel } from '../../store/companies/models/company.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompaniesApiService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(`${environment.api}/Companies`);
  }
}
