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

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  @Input() selectedRecipe2: IRecipe;

  isRouteComponent = false;

  get selectedRecipe() { return this.recipesService.selectedRecipe; }

  constructor(
    private recipesService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
      this.isRouteComponent = this.activatedRoute.snapshot.data.shouldFetchCause;
    }

  ngOnInit() {
    if(this.isRouteComponent){
    //  this.recipesService
    //    .load(this.activatedRoute.snapshot.params.id)
    //    .subscribe(() => {
    //    // tuka ima problem !!
    //  })
    } 
  }

}
