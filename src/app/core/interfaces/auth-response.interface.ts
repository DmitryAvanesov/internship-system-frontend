import { RolesEnum } from '@core/enums/roles.enum';

export interface AuthResponse {
  accessToken: string;
  name: string;
  roles: string[];
  id: string;
}

export interface TransformedAuthResponse {
  name: string;
  roles: RolesEnum[];
  id: string;
}
