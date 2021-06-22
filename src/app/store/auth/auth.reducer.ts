import { createReducer, on } from '@ngrx/store';
import { AuthState } from '@store/auth/auth.state';
import { RolesEnum } from '@core/enums/roles.enum';
import { logout, setRoles, signedIn } from '@store/auth/auth.actions';

const initialState: AuthState = {
  isLoggedIn: false,
  roles: [],
};

export const authReducer = createReducer(
  initialState,
  on(setRoles, (state, { roles }) => ({ ...state, roles })),
  on(signedIn, (state, { response }) => ({
    ...state,
    roles: response.roles,
    name: response.name,
    id: response.id,
    isLoggedIn: true,
  })),
  on(logout, (state) => ({
    ...state,
    isLoggedIn: false,
    name: undefined,
    roles: [],
    id: undefined,
  }))
);
