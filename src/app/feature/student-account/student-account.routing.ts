import { RouterModule, Routes } from '@angular/router';
import { StudentAccountComponent } from './pages/student-account/student-account.component';

const routes: Routes = [
  {
    path: '',
    component: StudentAccountComponent,
  },
];

export const StudentAccountRouting = RouterModule.forChild(routes);
