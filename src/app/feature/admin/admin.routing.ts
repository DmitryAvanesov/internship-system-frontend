import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TechnologiesListComponent} from '@admin/pages/technologies-list/technologies-list.component';
import {SpecializationsListComponent} from '@admin/pages/specializations-list/specializations-list.component';
import {CompanyAccountComponent} from '@shared/components/company-account/company-account.component';
import {StudentAccountComponent} from '@shared/components/student-account/student-account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'technologies',
    component: TechnologiesListComponent,
  },
  {
    path: 'specializations',
    component: SpecializationsListComponent,
  },
  {
    path: 'company',
    children: [
      {
        path: ':id',
        component: CompanyAccountComponent,
      },
      {
        path: 'new',
        component: CompanyAccountComponent,
      }
    ]
  },
  {
    path: 'student',
    children: [
      {
        path: ':id',
        component: StudentAccountComponent,
      },
      {
        path: 'new',
        component: StudentAccountComponent,
      }
    ]
  }
];

export const AdminRouting = RouterModule.forChild(routes);
