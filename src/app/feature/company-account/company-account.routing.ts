import { RouterModule, Routes } from '@angular/router';
import { CompanyAccountComponent } from '@company-account/company-account/company-account.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyAccountComponent,
  },
];
export const CompanyAccountRouting = RouterModule.forChild(routes);
