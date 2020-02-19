import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  get recipes(){
    return this.recipeService.recipes;
  }

  @Output() selectRecipe: EventEmitter<IRecipe> = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.load().subscribe();
  }

  selectRecipeHandler(recipe: IRecipe){
    this.recipeService.selectRecipe(recipe);
  }

}
