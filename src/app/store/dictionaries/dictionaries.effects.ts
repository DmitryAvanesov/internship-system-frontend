import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SpecializationsApiService} from '@core/services/specializations-api.service';
import {TechnologiesApiService} from '@core/services/technologies-api.service';
import {
  createOrSaveSpecialization,
  createOrSaveTechnology,
  loadDictionaries, saveSpecialization, saveTechnology,
  specializationsLoaded,
  technologiesLoaded
} from '@store/dictionaries/dictionaries.actions';
import {combineLatest} from 'rxjs';
import {map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {Action, Store} from '@ngrx/store';
import {selectAllSpecializationEntities, selectAllTechnologyEntities} from '@store/dictionaries/dictionaries.selectors';

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
          technologiesLoaded({technologies: data[0]}),
          specializationsLoaded({specializations: data[1]}),
        ];
      })
    )
  );

  technologyAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrSaveTechnology.type),
      map((action: Action & {newEntity: DictionaryElementModel}) => action),
      withLatestFrom(this.store.select(selectAllTechnologyEntities)),
      map(([action, technologies]) => {
        return {action, isCreate: !!technologies[action.newEntity.id]};
      }),
      switchMap(({action, isCreate}) => {
        return isCreate
          ? this.technologiesApiService.changeTechnology(action.newEntity)
          : this.technologiesApiService.createNewTechnology(action.newEntity);
      }),
      map((technology) => {
        return saveTechnology({technology});
      })
    )
  );

  specializationAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrSaveSpecialization.type),
      map((action: Action & {newEntity: DictionaryElementModel}) => action),
      withLatestFrom(this.store.select(selectAllSpecializationEntities)),
      map(([action, specializations]) => {
        return {action, isCreate: !!specializations[action.newEntity.id]};
      }),
      switchMap(({action, isCreate}) => {
        return isCreate
          ? this.specializationsApiService.changeTechnology(action.newEntity)
          : this.specializationsApiService.createNewTechnology(action.newEntity);
      }),
      map((specialization) => {
        return saveSpecialization({specialization});
      })
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private specializationsApiService: SpecializationsApiService,
    private technologiesApiService: TechnologiesApiService,
  ) {}
}
