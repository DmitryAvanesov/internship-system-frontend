import {createReducer, on} from '@ngrx/store';
import {AuthState} from '@store/auth/auth.state';
import {RolesEnum} from '@core/enums/roles.enum';
import {logout, setRoles, signedInError, signedInSuccessful, signIn} from '@store/auth/auth.actions';

const initialState: AuthState = {
  isLoggedIn: false,
  roles: undefined,
  signInLoading: false,
};

export const authReducer = createReducer(
  initialState,
  on(setRoles, (state, {roles}) => ({...state, roles})),
  on(logout, (state) => ({...state, isLoggedIn: false, roles: null})),
  on(signIn, (state) => ({...state, signInLoading: true})),
  on(signedInSuccessful, (state, {id, role}) => ({...state, signInLoading: false, id, roles: role, isLoggedIn: true})),
  on(signedInError, (state) => ({...state, signInLoading: false}))
);
