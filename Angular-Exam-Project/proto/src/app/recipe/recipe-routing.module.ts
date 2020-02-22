import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGard } from '../shared/validators/auth.guard';
import { UpdateComponent } from "./update/updateComponent";


const routes: Routes = [
    {
        path: 'recipe',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/recipe/create'
            },
            {
                path: 'create',
                component: CreateComponent,
                canActivate: [AuthGard]
            },
            {
                path: 'details/:id',
                component: DetailComponent,
                canActivate: [AuthGard]
            },
            {
                path: 'update/:id',
                component: UpdateComponent,
                canActivate: [AuthGard]
            }
        ]
    }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);