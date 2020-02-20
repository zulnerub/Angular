import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get isLogged(){
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout(){
    this.userService.SignOut();
    this.router.navigate(['']);
  }

}

