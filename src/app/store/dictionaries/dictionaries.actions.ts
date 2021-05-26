import {createAction, props} from '@ngrx/store';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';

export const loadDictionaries = createAction('[Dictionaries] Load all dictionaries');

export const technologiesLoaded = createAction('[Dictionaries] Set all technologies', props<{technologies: DictionaryElementModel[]}>());
export const specializationsLoaded = createAction(
  '[Dictionaries] Set all specializations',
  props<{specializations: DictionaryElementModel[]}>()
);
