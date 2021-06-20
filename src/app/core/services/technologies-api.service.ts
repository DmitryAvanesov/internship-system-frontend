import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model'
import { delay } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class TechnologiesApiService {
    constructor(private http: HttpClient) {}

    getTechnologies(): Observable<DictionaryElementModel[]> {
        return this.http.get<DictionaryElementModel[]>(
            `${environment.api}/Technologies`
        )
    }
}
