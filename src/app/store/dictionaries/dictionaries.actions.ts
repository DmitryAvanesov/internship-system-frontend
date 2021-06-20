import { createAction, props } from '@ngrx/store';
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model';

export const loadDictionaries = createAction(
  '[Dictionaries] Load all dictionaries'
);

export const technologiesLoaded = createAction(
  '[Dictionaries] Set all technologies',
  props<{ technologies: DictionaryElementModel[] }>()
);
export const specializationsLoaded = createAction(
  '[Dictionaries] Set all specializations',
  props<{ specializations: DictionaryElementModel[] }>()
);

export const createOrSaveTechnology = createAction(
  '[Dictionaries] Create or save technology',
  props<{ newEntity: DictionaryElementModel }>()
);

export const saveTechnology = createAction(
  '[Dictionary] Save technology',
  props<{ technology: DictionaryElementModel }>()
);

export const createOrSaveSpecialization = createAction(
  '[Dictionaries] Create or save specialization',
  props<{ newEntity: DictionaryElementModel }>()
);

export const saveSpecialization = createAction(
  '[Dictionary] Save specialization',
  props<{ specialization: DictionaryElementModel }>()
);
