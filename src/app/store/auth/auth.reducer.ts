import {createReducer, on} from '@ngrx/store';
import {AuthState} from '@store/auth/auth.state';
import {RolesEnum} from '@core/enums/roles.enum';
import {setRoles} from '@store/auth/auth.actions';

const initialState: AuthState = {
  isLoggedIn: true,
  roles: [RolesEnum.Student]
};

export const authReducer = createReducer(
  initialState,
  on(setRoles, (state, {roles}) => ({...state, roles})),
);
