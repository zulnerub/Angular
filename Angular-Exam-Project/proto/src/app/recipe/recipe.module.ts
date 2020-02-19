import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent, 
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    DetailComponent
  ]
})
export class RecipeModule { }
