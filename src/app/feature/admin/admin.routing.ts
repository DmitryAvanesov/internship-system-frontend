import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TechnologiesListComponent } from '@admin/pages/technologies-list/technologies-list.component';
import { SpecializationsListComponent } from '@admin/pages/specializations-list/specializations-list.component';
import { CompanyAccountComponent } from '@shared/components/company-account/company-account.component';
import { StudentAccountComponent } from '@shared/components/student-account/student-account.component';
import { AdminEntityEnum } from '@core/enums/admin-entity.enum';
import { CreateStudentComponent } from '@admin/pages/create-student/create-student.component';
import { EditStudentComponent } from '@admin/pages/edit-student/edit-student.component';
import { CreateCompanyComponent } from '@admin/pages/create-company/create-company.component';
import { EditCompanyComponent } from '@admin/pages/edit-company/edit-company.component';

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
        path: 'new',
        component: CreateCompanyComponent,
      },
      {
        path: ':id',
        component: EditCompanyComponent,
      },
    ],
  },
  {
    path: 'student',
    children: [
      {
        path: 'new',
        component: CreateStudentComponent,
      },
      {
        path: ':id',
        component: EditStudentComponent,
      },
    ],
  },
];

export const AdminRouting = RouterModule.forChild(routes);
