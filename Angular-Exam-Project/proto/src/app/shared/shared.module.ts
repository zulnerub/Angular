import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatcherDirective } from './validators/directives/password-matcher.directive';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    PasswordMatcherDirective,
    NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordMatcherDirective,
    NotFoundComponent
  ]
})
export class SharedModule { }
