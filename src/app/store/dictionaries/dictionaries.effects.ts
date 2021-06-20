import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { SpecializationsApiService } from '@core/services/specializations-api.service'
import { TechnologiesApiService } from '@core/services/technologies-api.service'
import {
    loadDictionaries,
    specializationsLoaded,
    technologiesLoaded,
} from '@store/dictionaries/dictionaries.actions'
import { combineLatest } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

@Injectable()
export class DictionariesEffects {
    loadDictionaries$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadDictionaries.type),
            mergeMap(() =>
                combineLatest([
                    this.specializationsApiService.getSpecializations(),
                    this.technologiesApiService.getTechnologies(),
                ])
            ),
            mergeMap((data) => {
                return [
                    technologiesLoaded({ technologies: data[0] }),
                    specializationsLoaded({ specializations: data[1] }),
                ]
            })
        )
    )

    constructor(
        private actions$: Actions,
        private specializationsApiService: SpecializationsApiService,
        private technologiesApiService: TechnologiesApiService
    ) {}
}
