import {EntityState} from '@ngrx/entity';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';

export interface DictionariesState {
  technologies: TechnologiesState;
  specializations: SpecializationsState;
}

export interface TechnologiesState extends EntityState<DictionaryElementModel>{}

export interface SpecializationsState extends EntityState<DictionaryElementModel>{}
