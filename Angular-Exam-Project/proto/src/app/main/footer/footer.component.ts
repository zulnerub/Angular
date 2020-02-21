import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  get isLogged(){
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
