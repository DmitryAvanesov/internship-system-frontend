import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '@core/interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) {}

  signIn(data: { name: string; password: string }, path: string) {
    return this.httpClient.post<AuthResponse>(
      `${environment.api}/${path}/SignIn`,
      data
    );
  }
}
