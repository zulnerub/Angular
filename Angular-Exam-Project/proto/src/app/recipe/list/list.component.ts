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

  allRecipes: IRecipe[];

  constructor(
    private recipeService: RecipeService
    ) { }

  ngOnInit() {
    
    this.getAllRecipes();
  }


  getAllRecipes(){
     this.recipeService.getRecipes().subscribe(data => {
      this.allRecipes = data.map(e => {
        return {
          id: e.payload.doc.id,
          authorId: e.payload.doc.data()["authorId"],
          category: e.payload.doc.data()["category"],
          imgUrlRecipe: e.payload.doc.data()["imgUrlRecipe"],
          summary: e.payload.doc.data()["summary"],
          title: e.payload.doc.data()["title"]                
       } as IRecipe;
      })
    });
  }

  selectRecipeDetail(recipe: IRecipe){
    return this.recipeService.selectRecipe(recipe);
  }
 
  create(recipe: IRecipe){
      this.recipeService.createRecipe(recipe);
  }

  update(recipe: IRecipe) {
    this.recipeService.updateRecipe(recipe);
  }

  delete(id: string) {
    this.recipeService.deleteRecipe(id);
  }

}
