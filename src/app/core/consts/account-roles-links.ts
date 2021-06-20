import { RolesEnum } from '@core/enums/roles.enum';
import { appRoutes } from '../../app.routes';

export const accountRolesLinks: { [key in RolesEnum]: string } = {
  [RolesEnum.Company]: appRoutes.companyAccount.path,
  [RolesEnum.Student]: appRoutes.studentAccount.path,
  [RolesEnum.Admin]: appRoutes.admin.path,
};
