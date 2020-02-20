import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() selectedRecipe2: IRecipe;

  isRouteComponent = true;

  get selectedRecipe() { 
    return this.recipeService.selectedRecipe; 
  }

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    ) { 
      this.isRouteComponent = this.activatedRoute.snapshot.data.shouldGetRecipe;
    }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    
    if(this.isRouteComponent){
      this.recipeService
        .getRecipeDetails(this.activatedRoute.snapshot.params.id)
        
    } 
  }

}
