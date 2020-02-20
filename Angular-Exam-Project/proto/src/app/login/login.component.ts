import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailRegex = new RegExp('^([a-zA-Z0-9]){1,}([a-zA-Z0-9\.\-\_]){5,}@gmail\.com');

  constructor(
    public userService: UserService,
    ) { }

  ngOnInit() {
  }

  handleLogin(loginFormValue: { email: string, password: string }) {
    this.userService.SignIn(loginFormValue.email, loginFormValue.password);
  }

}
