import { createAction, props } from '@ngrx/store';
import { RolesEnum } from '@core/enums/roles.enum';
import {
  AuthResponse,
  TransformedAuthResponse,
} from '@core/interfaces/auth-response.interface';

export const setRoles = createAction(
  '[Auth] Set role',
  props<{ roles: RolesEnum[] }>()
);

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ name: string; password: string }>()
);
export const signedIn = createAction(
  '[Auth] Signed in',
  props<{ response: TransformedAuthResponse }>()
);
export const logout = createAction('[Auth] Logout');
