import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {


@Input() recipe: IRecipe; 
  
 form: FormGroup;
 author = JSON.parse(localStorage.getItem('user'));

 get selectedRecipe(){
   return (this as any).recipeService.selectedRecipe = this.recipe;
 }

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.form = this.fb.group({
      category: ['', [Validators.required]],
      title: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      imgUrlRecipe: ['', [Validators.required]]
    });
   }

 

  ngOnInit() {
  }

  handleUpdateRecipe (){
    this.form.value.authorId = this.author.uid;
    this.recipeService.updateRecipe(this.form.value);
    this.router.navigate(['user']);
  }
}
