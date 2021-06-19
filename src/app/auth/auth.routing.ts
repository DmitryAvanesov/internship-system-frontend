import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from '@auth/pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
];

export const AuthRouting = RouterModule.forChild(routes);
