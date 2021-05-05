import { RouterModule, Routes } from '@angular/router';
import { StudentPageComponent } from '@students/student-page/student-page.component';
import { StudentsPageComponent } from '@students/students-page/students-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentsPageComponent,
  },
  {
    path: '/:id',
    component: StudentPageComponent,
  },
];

export const StudentsRouting = RouterModule.forChild(routes);
