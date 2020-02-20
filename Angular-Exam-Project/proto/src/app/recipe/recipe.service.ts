import { Injectable } from '@angular/core';
import { IRecipe } from '../shared/interfaces/recipe';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: IRecipe[];

  readonly selectedRecipe: IRecipe;

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  

  getRecipes() { 
    return this.firestore.collection(`recipes`).snapshotChanges();
  }
    

  createRecipe(recipe){
    return this.firestore.collection("recipes").add(recipe);
  }

  deleteRecipe(id: string){
    this.firestore.doc('recipes/' + id).delete();
  }

  updateRecipe(recipe: IRecipe){
    delete recipe.id
    this.firestore.doc('recipes/' + recipe.id).update(recipe);
  }

  getRecipeDetails(recipe: IRecipe){
     this.selectRecipe(recipe);
    //this.router.navigate(['recipes/details/' + recipe.id]);
  }

  selectRecipe(recipe: IRecipe){
    (this as any).selectedRecipe = recipe;
  }

  
}
