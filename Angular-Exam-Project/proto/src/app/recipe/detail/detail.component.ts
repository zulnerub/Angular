import { Component, OnInit, Input} from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {



  get selectedRecipe() { 
    return this.recipeService.selectedRecipe; 
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
    ) { 
      this.route.params.subscribe(params => {
        this.recipeService.getRecipeDetails(params['id'])
          .subscribe((r: IRecipe) => {
             (this as any).recipeService.selectedRecipe = r;
          });
      })
    }

  ngOnInit() {

  }
}
