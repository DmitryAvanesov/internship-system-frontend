import {
    specializationsAdapter,
    technologiesAdapter,
} from '@store/dictionaries/dictionaries.reducer'
import { createFeatureSelector } from '@ngrx/store'
import { AppState } from '@store/root.reducer'
import { DictionariesState } from '@store/dictionaries/dictionaries.state'

const selectDictionaries = createFeatureSelector<AppState, DictionariesState>(
    'dictionaries'
)

const selectTechnologies = (state: AppState) =>
    selectDictionaries(state).technologies

export const {
    selectAll: selectAllTechnologies,
    selectEntities: selectAllTechnologyEntities,
} = technologiesAdapter.getSelectors(selectTechnologies)

const selectSpecializations = (state: AppState) =>
    selectDictionaries(state).specializations

export const {
    selectAll: selectAllSpecializations,
    selectEntities: selectAllSpecializationEntities,
} = specializationsAdapter.getSelectors(selectSpecializations)
