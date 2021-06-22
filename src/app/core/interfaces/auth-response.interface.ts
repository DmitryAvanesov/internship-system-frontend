import { RolesEnum } from '../../../../../../Users/mectu/Downloads/internship-system-frontend-temp2/internship-system-frontend-temp2/src/app/core/enums/roles.enum';

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
