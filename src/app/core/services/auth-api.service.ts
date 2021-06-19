import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {RolesEnum} from '@core/enums/roles.enum';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor() { }

  signIn(email: string, password: string): Observable<{id: string, role: RolesEnum[]}> {
    return of({id: '1122', role: [RolesEnum.Company]}).pipe(delay(1500));
  }
}
