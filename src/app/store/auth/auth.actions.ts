import {createAction, props} from '@ngrx/store';
import {RolesEnum} from '@core/enums/roles.enum';

export const setRoles = createAction('[Auth] Set role', props<{ roles: RolesEnum[] }>());
export const logout = createAction('[Auth] Logout');
export const signIn = createAction('[Auth] Sign in', props<{email: string, password: string}>());
export const signedInSuccessful = createAction('[Auth] Signed In', props<{id: string, role: RolesEnum[]}>());
export const signedInError = createAction('[Auth] Auth error');
