import {RolesEnum} from '@core/enums/roles.enum';

export interface AuthState {
  id?: string;
  isLoggedIn: boolean;
  roles: RolesEnum[];
  signInLoading: boolean;
}
