import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PositionModel } from '@store/positions/models/position.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PositionsApiService {
  constructor(private http: HttpClient) {}

  getPositions(): Observable<PositionModel[]> {
    return this.http.get<PositionModel[]>(`${environment.api}/Positions`);
  }

  getPositionById(id: string): Observable<PositionModel> {
    return this.http.get<PositionModel>(`${environment.api}/Positions/${id}`);
  }
}
