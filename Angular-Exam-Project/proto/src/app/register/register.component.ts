import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailRegex = new RegExp('^([a-zA-Z0-9]){1,}([a-zA-Z0-9\.\-\_]){5,}@gmail\.com');


  constructor(
    public userService: UserService,
    ) { }

  ngOnInit() {
  }


  handleRegister(loginFormValue: { email: string, passwords:{password: string }}) {
    this.userService.SignUp(loginFormValue.email, loginFormValue.passwords.password);
  }

}
