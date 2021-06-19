import {Route, UrlSegment, UrlSegmentGroup} from '@angular/router';
import {RolesEnum} from '@core/enums/roles.enum';
import {AuthGuard} from '@core/guards/auth.guard';

export const appRoutes: { [key: string]: Route } = {
  companies: {
    path: 'companies',
    data: {
      title: 'Компании',
    },
  },
  students: {
    path: 'students',
    data: {
      title: 'Студенты',
    },
  },
  companyAccount: {
    path: 'company-account',
      data: {
      title: 'ЛК компании',
        roles: [RolesEnum.Company],
        hidden: true,
    },
    canLoad: [AuthGuard],
  },
  studentAccount: {
    path: 'student-account',
      data: {
      title: 'ЛК студента',
        roles: [RolesEnum.Student],
        hidden: true,
    },
    canLoad: [AuthGuard],
  },
  auth: {
    path: 'auth',
    data: {
      title: 'Авторизация',
      hidden: true,
    }
  }
};
