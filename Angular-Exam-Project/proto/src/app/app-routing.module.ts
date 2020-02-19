import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGard } from './shared/validators/auth.gard';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGard],
    data: {
      isLogged: false
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];



export const AppRoutingModule = RouterModule.forRoot(routes);
