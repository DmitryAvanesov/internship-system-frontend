import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@core/guards/auth.guard';
import { FirstTimeGuardGuard } from '@core/guards/first-time-guard.guard';

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
    canLoad: [FirstTimeGuardGuard],
  },
  {
    ...appRoutes.students,
    loadChildren: (): Promise<unknown> =>
      import('@students/students.module').then((m) => m.StudentsModule),
    canLoad: [FirstTimeGuardGuard],
  },
  {
    ...appRoutes.companyAccount,
    loadChildren: (): Promise<unknown> =>
      import('@company-account/company-account.module').then(
        (m) => m.CompanyAccountModule
      ),
    canLoad: [FirstTimeGuardGuard, AuthGuard],
  },
  {
    ...appRoutes.studentAccount,
    loadChildren: (): Promise<unknown> =>
      import('@student-account/student-account.module').then(
        (m) => m.StudentAccountModule
      ),
    canLoad: [FirstTimeGuardGuard, AuthGuard],
  },
  {
    ...appRoutes.admin,
    loadChildren: (): Promise<unknown> =>
      import('@admin/admin.module').then((m) => m.AdminModule),
    canLoad: [FirstTimeGuardGuard, AuthGuard],
  },
  {
    ...appRoutes.auth,
    loadChildren: (): Promise<unknown> =>
      import('@auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
