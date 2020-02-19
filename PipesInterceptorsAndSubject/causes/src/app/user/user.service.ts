import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: { email: string, password: string };

  get isLogged(){
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {

    this.http.get('auth').subscribe((user: any) => {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    });
   }

  login(email: string, password: string) {
    return this.http.post('user/login', { email, password }).pipe(tap((user: any) => {
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
