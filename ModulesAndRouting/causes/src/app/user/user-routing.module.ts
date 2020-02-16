import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGard } from '../auth.gard';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: UserComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGard],
                data: {
                    isLogged: true
                }
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);