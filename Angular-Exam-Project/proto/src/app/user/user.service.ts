import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from '../shared/interfaces/user';
import { tap, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;

  get isLogged(){
    return !!this.currentUser;
  }

  authenticated$ = this.http.get('auth').pipe(shareReplay(1));

  constructor(
    private http: HttpClient
  ) { 
    this.authenticated$.subscribe((user: any) => {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    });
  }

  login(email: string, password: string){
    return this.http.post('user/login', { email, password })
    .pipe(tap((user: any) => {
      this.currentUser = user;
    }));
  }

  register(email: string, password: string) {
    return this.http.post('user/register', { email, password });
  }

  logout(){
    return this.http.post('user/logout', {}).pipe(tap(() => {
      this.currentUser = null;
    }));
  }
}
