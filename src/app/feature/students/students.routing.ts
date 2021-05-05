import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from '@students/students-page/students-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsPageComponent,
  },
];

export const StudentsRouting = RouterModule.forChild(routes);
