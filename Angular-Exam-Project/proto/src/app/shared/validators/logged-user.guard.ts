import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Injectable({
    providedIn: 'root'
})

export class LoggedUserGuard implements CanActivate {
  constructor(
    public userService: UserService,
    public router: Router
  ){}

  canActivate(): boolean {
      if(this.userService.isLogged){
        window.alert("You are not allowed to access this URL!");
        this.router.navigate(['']);
        return false;
      }
    return true;
  }
  
}
