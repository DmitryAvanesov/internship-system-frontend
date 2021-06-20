import { NgModule } from '@angular/core'
import {
    PreloadAllModules,
    Route,
    RouterModule,
    ROUTES,
    Routes,
} from '@angular/router'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { appRoutes } from './app.routes'
import { CompanyAccountModule } from './feature/company-account/company-account.module'
import { Store } from '@ngrx/store'
import { selectUserRoles } from '@store/auth/auth.selectors'

const routes: Routes = [
    {
        path: '',
        redirectTo: appRoutes.companies.path,
        pathMatch: 'full',
    },
    {
        ...appRoutes.companies,
        loadChildren: (): Promise<unknown> =>
            import('@companies/companies.module').then(
                (m) => m.CompaniesModule
            ),
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
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
