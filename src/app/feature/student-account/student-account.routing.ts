import { RouterModule, Routes } from '@angular/router';
import { AdminEntityEnum } from '@core/enums/admin-entity.enum';
import { StudentAccountComponent } from '@student-account/student-account/student-account.component';

const routes: Routes = [
  {
    path: '',
    component: StudentAccountComponent,
    data: { adminEntityEnum: AdminEntityEnum.ownEntity },
  },
];

export const StudentAccountRouting = RouterModule.forChild(routes);
