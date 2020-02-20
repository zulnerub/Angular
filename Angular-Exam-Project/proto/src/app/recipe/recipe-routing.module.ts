import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGard } from '../shared/validators/auth.guard';


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
                path: 'detail/:id',
                component: DetailComponent,
                canActivate: [AuthGard],
                data: {
                    shouldGetRecipe: true,
                    isLogged: true
                }
            }
        ]
    }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);