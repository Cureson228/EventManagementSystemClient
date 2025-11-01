import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirstKeyPipe } from '../../../shared/pipes/first-key.pipe';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FirstKeyPipe, ToastrModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  constructor(private formBuilder : FormBuilder, private toastr: ToastrService){}


    passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')

    if (password && confirmPassword && password.value != confirmPassword.value)
      confirmPassword?.setErrors({ passwordMismatch: true })
    else
      confirmPassword?.setErrors(null)

    return null;
  }

  isSubmitted = false;
  form = this.formBuilder.group({
    fullName : ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=(?:.*\\d){5,}).*$')]],
    confirmPassword: ['']
  },{validators : this.passwordMatchValidator});



  onSubmit(){
    this.isSubmitted = true;

    if (this.form.valid){
      this.toastr.success("You've been successfuly registered");
      console.log(this.form.value);  
      this.isSubmitted = false;
      this.form.reset();
    }
    
    
  }

    hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched)|| Boolean(control?.dirty))
  }
}
