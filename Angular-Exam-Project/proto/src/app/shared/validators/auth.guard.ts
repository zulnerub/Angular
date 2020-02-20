import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGard implements CanActivate {
    constructor(
        private userService: UserService,
        public router: Router
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        if(!this.userService.isLogged){
            this.router.navigate(['login'])
        }
        return true;
    }
}