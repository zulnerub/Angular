import { Component, OnInit } from '@angular/core';
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
  form: FormGroup;
  author = JSON.parse(localStorage.getItem('user'));
  receipe: IRecipe;

  constructor(
    private fb: FormBuilder,
     private recipeService: RecipeService,
      private router: Router,
       private route: ActivatedRoute 
        ) {

    this.route.params.subscribe(params => {
      this.recipeService.getRecipeDetails(params['id'])
        .subscribe((r: IRecipe) => {
          this.recipeService.selectRecipe(r);
        });
    });

    this.receipe = this.recipeService.selectedRecipe;

    this.form = this.fb.group({
      category: ['', [Validators.required]],
      title: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      imgUrlRecipe: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  handleUpdateRecipe() {
    this.form.value.authorId = this.author.uid;
    this.recipeService.updateRecipe(this.form.value);
    this.router.navigate(['user']);
  }

}
