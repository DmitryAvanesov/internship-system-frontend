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

  changeCompany(company: CompanyModel): Observable<CompanyModel> {
    return this.http.put<CompanyModel>(
      `${environment.api}/Companies`,
      { ...company, password: 'aA12345678*' },
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
  createCompany(company: CompanyModel): Observable<CompanyModel> {
    return this.http.post<CompanyModel>(
      `${environment.api}/Companies`,
      company,
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
}
