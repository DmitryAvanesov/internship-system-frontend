import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../Users/mectu/Downloads/internship-system-frontend-temp2/internship-system-frontend-temp2/src/environments/environment';
import { AuthResponse } from '@core/interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  signIn(data: { name: string; password: string }, path: string) {
    return this.httpClient.post<AuthResponse>(
      `${environment.api}/${path}/SignIn`,
      {},
      { params: data }
    );
  }
}
