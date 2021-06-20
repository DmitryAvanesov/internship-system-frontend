import { RouterModule, Routes } from '@angular/router'
import { StudentPageComponent } from '@students/pages/student/student-page.component'
import { StudentsPageComponent } from '@students/pages/students/students-page.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: StudentsPageComponent,
    },
    {
        path: ':id',
        component: StudentPageComponent,
    },
]

export const StudentsRouting = RouterModule.forChild(routes)
