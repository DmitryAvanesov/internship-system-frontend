import {saveSpecialization, saveTechnology, specializationsLoaded, technologiesLoaded} from '@store/dictionaries/dictionaries.actions';
import {DictionariesState} from '@store/dictionaries/dictionaries.state';
import {createEntityAdapter} from '@ngrx/entity';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {createReducer, on} from '@ngrx/store';

export const technologiesAdapter =
  createEntityAdapter<DictionaryElementModel>();
export const specializationsAdapter =
  createEntityAdapter<DictionaryElementModel>();

const initialState: DictionariesState = {
  technologies: technologiesAdapter.getInitialState(),
  specializations: specializationsAdapter.getInitialState(),
};

export const dictionariesReducer = createReducer<DictionariesState>(
  initialState,
  on(technologiesLoaded, (state, {technologies}) =>
    ({...state, technologies: technologiesAdapter.setAll(technologies, state.technologies)})
  ),
  on(specializationsLoaded, (state, {specializations}) =>
    ({...state, specializations: specializationsAdapter.setAll(specializations, state.specializations)})
  ),
  on(saveTechnology, (state, {technology}) =>
    ({...state, technologies: technologiesAdapter.upsertOne(technology, state.technologies)})
  ),
  on(saveSpecialization, (state, {specialization}) =>
    ({...state, specializations: specializationsAdapter.upsertOne(specialization, state.specializations)})
  )
);
