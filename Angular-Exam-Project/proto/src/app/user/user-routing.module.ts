import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGard } from '../shared/validators/auth.guard';

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
                canActivate: [AuthGard]
            }
        ]
    }
];

export const UserRoutingmodule = RouterModule.forChild(routes);