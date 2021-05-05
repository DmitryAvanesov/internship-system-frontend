import { Route } from '@angular/router';

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
};
