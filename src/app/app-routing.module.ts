import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appRoutes } from './app.routes';

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
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
