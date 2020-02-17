import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGard } from '../auth.gard';

const routes: Routes = [
    {
        path: 'cause',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/cause/create'
            },
            {
                path: 'create',
                component: CreateComponent,
                canActivate: [AuthGard],
                data: {
                    isLogged: true
                }
            },
            {
                path: 'detail/:id',
                component: DetailComponent,
                canActivate: [AuthGard],
                data: { 
                    shouldFetchCause: true,
                    isLogged: true
                }
            }
        ]
    }
];

export const CauseRoutingModule = RouterModule.forChild(routes);