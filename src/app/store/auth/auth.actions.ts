import {createAction, props} from '@ngrx/store';
import {RolesEnum} from '@core/enums/roles.enum';

export const setRoles = createAction('[Auth] Set role', props<{ roles: RolesEnum[] }>());
