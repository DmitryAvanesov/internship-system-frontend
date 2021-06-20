import {RouterModule, Routes} from '@angular/router';
import {StudentAccountComponent} from '@shared/components/student-account/student-account.component';
import {AdminEntityEnum} from '@core/enums/admin-entity.enum';

const routes: Routes = [
  {
    path: '',
    component: StudentAccountComponent,
    data: {adminEntityEnum: AdminEntityEnum.ownEntity}
  },
];

export const StudentAccountRouting = RouterModule.forChild(routes);
