import { RouterModule, Routes } from "@angular/router";
import { StudentsListComponent } from "./students-list/students-list.component";

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent,
  }
];

export const StudentsRouting = RouterModule.forChild(routes);