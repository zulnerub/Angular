import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../shared/interfaces/recipe';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent   {

  get isLogged(){
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService
  ) { }

  selectedRecipe: IRecipe;

  selectRecipeHandler(recipe: IRecipe) {
    this.selectedRecipe = recipe;
  }



}
