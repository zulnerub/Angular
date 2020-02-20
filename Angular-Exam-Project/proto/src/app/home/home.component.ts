import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../shared/interfaces/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent   {

  constructor() { }

  selectedRecipe: IRecipe;

  selectRecipeHandler(recipe: IRecipe) {
    this.selectedRecipe = recipe;
  }

}
