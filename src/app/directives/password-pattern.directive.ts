import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { CustomvalidationService } from 'src/@AppService/services/customvalidation.service';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true }]

})
export class PasswordPatternDirective {

  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.patternValidator()(control);
  }
  //We will implement the Validator interface on the class PasswordPatternDirective. We will override the validate method which accepts a parameter of type AbstractControl, that is the control we want to validate.

}
