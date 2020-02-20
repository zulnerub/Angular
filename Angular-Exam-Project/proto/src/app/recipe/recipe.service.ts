import { Injectable } from '@angular/core';
import { IRecipe } from '../shared/interfaces/recipe';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: IRecipe[];

  readonly selectedRecipe: IRecipe;

  constructor(
    private firestore: AngularFirestore
  ) { }

  load(){
    return this.firestore.collection("recipes").snapshotChanges();
  }
    

  create(recipe){
    return new Promise<any>((response, reject) => {
      this.firestore
        .collection("recipes")
        .add(recipe)
        .then(response => {}, err => reject(err));
    });
  }

  

  selectRecipe(recipe: IRecipe){
    (this as any).selectedRecipe = recipe;
  }
}
