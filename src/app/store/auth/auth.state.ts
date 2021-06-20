import { RolesEnum } from '@core/enums/roles.enum'

export interface AuthState {
    isLoggedIn: boolean
    roles: RolesEnum[]
}
