import { EntityState } from '@ngrx/entity'
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model'

export interface DictionariesState {
    technologies: TechnologiesState
    specializations: SpecializationsState
}

export type TechnologiesState = EntityState<DictionaryElementModel>

export type SpecializationsState = EntityState<DictionaryElementModel>
