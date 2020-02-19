import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IRecipe } from '../shared/interfaces/recipe';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: IRecipe[];

  readonly selectedRecipe: IRecipe;

  constructor(
    private http: HttpClient
  ) { }

  load(id?: string){
    return this.http.get<IRecipe[] | IRecipe>(`recipe${id ? `/${id}` : ''}`)
    .pipe(tap(
      (recipes) => {
        if (id){
          (this as any).selectRecipe = recipes[0];
        }else{
          this.recipes = [].concat(recipes);
        }
      }
    ))
  }

  create(recipe: any){
    return this.http.post<IRecipe>(`recipes`, recipe);
  }

  selectRecipe(recipe: IRecipe){
    (this as any).selectedRecipe = recipe;
  }
}
