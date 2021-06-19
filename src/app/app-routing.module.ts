import { NgModule } from '@angular/core';
import {PreloadAllModules, Route, RouterModule, ROUTES, Routes} from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appRoutes } from './app.routes';
import {CompanyAccountModule} from "./feature/company-account/company-account.module";
import {Store} from "@ngrx/store";
import {selectUserRoles} from "@store/auth/auth.selectors";
import {AuthGuard} from '@core/guards/auth.guard';

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
    import('@company-account/company-account.module').then((m) => m.CompanyAccountModule),
    canLoad: [AuthGuard]
  },
  {
  ...appRoutes.studentAccount,
    loadChildren: (): Promise<unknown> =>
    import('@student-account/student-account.module').then((m) => m.StudentAccountModule),
    canLoad: [AuthGuard]
  },
  {
    ...appRoutes.auth,
    loadChildren: (): Promise<unknown> =>
      import('@auth/auth.module').then((m) => m.AuthModule),
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
