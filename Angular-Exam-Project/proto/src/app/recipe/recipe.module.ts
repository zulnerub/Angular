import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from "./update/updateComponent";



@NgModule({
  declarations: [
    CreateComponent, 
    DetailComponent,
    ListComponent,
    UpdateComponent
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
