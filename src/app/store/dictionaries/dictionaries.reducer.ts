import {createEntityAdapter} from '@ngrx/entity';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {DictionariesState} from '@store/dictionaries/dictionaries.state';
import {createReducer, on} from '@ngrx/store';
import {specializationsLoaded, technologiesLoaded} from '@store/dictionaries/dictionaries.actions';

export const technologiesAdapter = createEntityAdapter<DictionaryElementModel>();
export const specializationsAdapter = createEntityAdapter<DictionaryElementModel>();

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
);
