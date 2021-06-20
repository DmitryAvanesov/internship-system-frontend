import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class SpecializationsApiService {
    constructor(private http: HttpClient) {}

    getSpecializations(): Observable<DictionaryElementModel[]> {
        return this.http.get<DictionaryElementModel[]>(
            `${environment.api}/Specializations`
        )
    }
}
