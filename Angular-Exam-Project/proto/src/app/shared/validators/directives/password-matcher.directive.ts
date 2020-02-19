import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from '../password-match';


@Directive({
  selector: '[appPasswordMatcher]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatcherDirective,
      multi: true
    }
  ]
})
export class PasswordMatcherDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return passwordMatch(control);
  }

}
