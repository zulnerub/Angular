import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get isReady(): boolean {
    return this.actualUserService.currentUser !== undefined;
  }

  constructor(
    private actualUserService: UserService
  ){
    
  }
}
