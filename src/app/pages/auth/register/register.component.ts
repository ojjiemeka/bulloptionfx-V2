import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm!: FormGroup
  submitted = false;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService,

  ) { }

  ngOnInit(): void {
    this.form();
  }

  form(){
    this.signupForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phonenumber: ['', Validators.required],
      nationality: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]],
      acceptTerms: [false, Validators.required]
    },
    {
      // validators: this.passwordMatchValidator('password',this.signupForm.value['password'])
      validator: this.ConfirmedValidator('password', 'password_confirmation'),
    }
    )
  }

  /**
   * It returns the controls of the loginForm
   * @returns The form controls.
   */
   get f() {
    return this.signupForm.controls;
  }

 ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors['confirmedValidator']
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

  signup(){

    this.submitted = true;

    if (this.signupForm.invalid) {
      this.error = "Please make sure all fields are properly filled";
      return this.error;
      // console.log(this.error);
    }else{
      this.authService.signup(this.signupForm.value).subscribe(res => {  
        // alert("Account Creation Successful");
        this.toast.success('Account Creation Successful');
        this.signupForm.reset(); //reset the form
        this.router.navigate(['/login'])
      },err =>{
        alert('Something went Wrong')
        console.log(err);
      })
      // console.log(this.signupForm.value);
    }
    // console.log(this.signupForm.value);
    // this.signupForm.reset();
  }


}
