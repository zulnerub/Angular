import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGard implements CanActivate {
    constructor(
        private userService: UserService,
        public router: Router
    ){ }

    canActivate(): boolean{
        if(!this.userService.isLogged){
            this.router.navigate(['login'])
            return false;
        }
        return true;
    }
}