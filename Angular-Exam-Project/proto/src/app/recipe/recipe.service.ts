import { Injectable } from '@angular/core';
import { IRecipe } from '../shared/interfaces/recipe';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: IRecipe[];
  userRecipes: IRecipe[];

  readonly selectedRecipe: IRecipe;

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  

  loadRecipe(id?: string) { 
    return this.firestore.collection(`recipes${id ? `/${id}` : ''}`).snapshotChanges();
  }

  loadUserRecipes() {
    return this.firestore.collection('recipes', (r) => r.where('authorId', '==', localStorage.getItem('user')['id'] )).snapshotChanges();
        
  }
    

  createRecipe(recipe){
    return this.firestore.collection("recipes").add(recipe);
  }

  deleteRecipe(id: string){
    this.firestore.doc('recipes/' + id).delete();
  }

  updateRecipe(recipe: IRecipe){
    this.firestore.doc('recipes/' + recipe.id).set(recipe).then(res => {
      this.router.navigate(['user']);
    });
  }

  getRecipeDetails(id: string){
    return this.firestore.collection<IRecipe>('recipes')
    .doc<IRecipe>(id).valueChanges();
  }

  selectRecipe(recipe: IRecipe){
    (this as any).selectedRecipe = recipe;
  }

  
}
