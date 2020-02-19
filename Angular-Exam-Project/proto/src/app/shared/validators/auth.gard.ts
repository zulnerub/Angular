import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGard implements CanActivate {
    constructor(
        private userService: UserService
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(!this.userService.isLogged){
            return this.userService.authenticated$.pipe(map(user => !!user),
            catchError(err => of(false)));
        }
        return true;
    }
}