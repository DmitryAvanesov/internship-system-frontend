import { createReducer, on } from '@ngrx/store';
import { AuthState } from '@store/auth/auth.state';
import { RolesEnum } from '@core/enums/roles.enum';
import { setRoles, signedIn } from '@store/auth/auth.actions';

const initialState: AuthState = {
  isLoggedIn: true,
  roles: [RolesEnum.Admin],
};

export const authReducer = createReducer(
  initialState,
  on(setRoles, (state, { roles }) => ({ ...state, roles })),
  on(signedIn, (state, { response }) => ({
    ...state,
    roles: response.roles,
    name: response.name,
    id: response.id,
  }))
);
