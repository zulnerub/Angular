import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { LoggedUserGuard } from './shared/validators/logged-user.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];



export const AppRoutingModule = RouterModule.forRoot(routes);
