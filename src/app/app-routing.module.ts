import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: appRoutes.companies.path,
    pathMatch: 'full',
  },
  {
    ...appRoutes.companies,
    loadChildren: (): Promise<unknown> =>
      import('@companies/companies.module').then((m) => m.CompaniesModule),
  },
  {
    ...appRoutes.students,
    loadChildren: (): Promise<unknown> =>
      import('@students/students.module').then((m) => m.StudentsModule),
  },
  {
    ...appRoutes.companyAccount,
    loadChildren: (): Promise<unknown> =>
      import('@company-account/company-account.module').then(
        (m) => m.CompanyAccountModule
      ),
  },
  {
    ...appRoutes.studentAccount,
    loadChildren: (): Promise<unknown> =>
      import('@student-account/student-account.module').then(
        (m) => m.StudentAccountModule
      ),
  },
  {
    ...appRoutes.admin,
    loadChildren: (): Promise<unknown> =>
      import('@admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
