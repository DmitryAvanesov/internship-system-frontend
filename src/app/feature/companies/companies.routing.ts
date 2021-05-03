import { RouterModule, Routes } from "@angular/router";
import { CompaniesListComponent } from "@companies/companies-list/companies-list.component";

const routes: Routes = [
  {
    path: '',
    component: CompaniesListComponent,
  }
];

export const CompaniesRouting = RouterModule.forChild(routes);