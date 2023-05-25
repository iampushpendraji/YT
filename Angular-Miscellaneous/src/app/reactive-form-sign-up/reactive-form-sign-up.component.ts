import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-sign-up',
  templateUrl: './reactive-form-sign-up.component.html',
  styleUrls: ['./reactive-form-sign-up.component.css']
})
export class ReactiveFormSignUpComponent {

  title = 'sign-up-form';
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  integreRegex = /^\d+$/
  signUpForm: any;
  showConfirmPassword: boolean = false;
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.signUpForm = _fb.group({
      first_name: ['', [ Validators.required ]],
      last_name: ['', [ Validators.required ]],
      email_address: ['', [ Validators.required, Validators.pattern(this.emailRegex) ]],
      age: ['', [ Validators.required, Validators.pattern(this.integreRegex), Validators.max(125), Validators.min(1) ]],
      gender: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]],
      confirm_password: ['', [ Validators.required ]],
      check: ['', [ Validators.required ]],
    },
    {
      validators: this.passwordMatch('password', 'confirm_password')
    });
  }

  passwordMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName],
            matchingControl = formGroup.controls[matchingControlName];
      if(control.value.length > 0 && matchingControl.value.length > 0) {
        if( control.value !== matchingControl.value) {
          matchingControl.setErrors({ passwordMatch: true });
        }
        else if(matchingControl.errors && !matchingControl.errors['passwordMatch']){
          return;
        }
        else if(control.value == matchingControl.value) {
          matchingControl.setErrors(null);
        }
      }
    }
  }

  signUpClickHandler(){
    console.log(this.signUpForm.value);
  }

  onChange(event: any){
    if(event.checked == false) {
      this.signUpForm.get('check')?.setErrors({
        required: true
      });
    }
  }

  getControl(name: string): AbstractControl | null {
    return this.signUpForm.get(name);
  }

}
