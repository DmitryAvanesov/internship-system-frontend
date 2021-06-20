import { RouterModule, Routes } from '@angular/router'
import { CompaniesListComponent } from '@companies/pages/companies-list/companies-list.component'
import { CompanyComponent } from './pages/company/company.component'

const routes: Routes = [
    {
        path: '',
        component: CompaniesListComponent,
    },
    {
        path: ':id',
        component: CompanyComponent,
    },
]

export const CompaniesRouting = RouterModule.forChild(routes)
