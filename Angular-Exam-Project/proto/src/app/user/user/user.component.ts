import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: IUser;
  userRecipes: IRecipe[];
  showUserRecipes: boolean = false;

  get isLogged(){
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService,
    private recipeService: RecipeService
  ) { 
    this.user = this.userService.userData;
  }

  ngOnInit() {
    this.getAllRecipes();    
  }

  getAllRecipes(){
    this.recipeService.loadRecipe().subscribe(data => {
     this.userRecipes = data.map(e => {
       return {
         id: e.payload.doc.id,
         authorId: e.payload.doc.data()["authorId"],
         category: e.payload.doc.data()["category"],
         imgUrlRecipe: e.payload.doc.data()["imgUrlRecipe"],
         summary: e.payload.doc.data()["summary"],
         title: e.payload.doc.data()["title"]                
      } as IRecipe;
     }).filter(r => {
       return r.authorId == JSON.parse(localStorage.getItem('user'))['uid'];
     })
   });
 }
 
  toggleViewUserRecipes() {
    this.showUserRecipes = !this.showUserRecipes;
  }

  deleteRecipe(id: string){
    this.recipeService.deleteRecipe(id);
  }

  updateRecipe(recipe: IRecipe){
    this.recipeService.updateRecipe(recipe);

  }

}
