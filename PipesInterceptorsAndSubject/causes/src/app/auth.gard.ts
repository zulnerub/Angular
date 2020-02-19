import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user/user.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGard implements CanActivate {
    constructor(private userService: UserService){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (!this.userService.isLogged){
            return this.userService.authCompleted$.pipe(map(user => !!user),
             catchError(err => of(false)));
        }
        return true;        
    }
}