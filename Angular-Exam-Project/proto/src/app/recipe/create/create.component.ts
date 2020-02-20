import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  author = JSON.parse(localStorage.getItem('user'));
 
  

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

 

  ngOnInit() {console.log(this.author);
  }

  handleCreateRecipe (){
    this.form.value.authorId = this.author.uid;
    this.recipeService.create(this.form.value);
    this.router.navigate(['recipes/create'])    ;
  }

  

}
