import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  public passwordResetForm!: FormGroup
  token: any;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toast: HotToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit(): void {
    this.form();
    this.getToken();
  }

  getToken(){
    this.activatedRoute.queryParams
    .subscribe(params => {
      // console.log(params);
      this.token = params
    }
  );
  }

  form(){
    this.activatedRoute.queryParams
    .subscribe(params => {
      // console.log(params['token']);
      this.token = params['token']
    }
  );

    this.passwordResetForm = this.formBuilder.group({
      token: [this.token],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]],
    },
    {
      // validators: this.passwordMatchValidator('password',this.signupForm.value['password'])
      validator: this.ConfirmedValidator('password', 'password_confirmation'),
    }
    )
  }

  get f() {
    return this.passwordResetForm.controls;
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

  reset(){
    this.submitted = true;

    this.auth.passwordReset(this.passwordResetForm.value).subscribe({
      next: res => {
        this.toast.success(res.message);
        this.router.navigate(['/login']);
        // console.log(res.message);
      },
      error: err => {
        this.toast.error(err.message);
        this.router.navigate(['/forgot-password']);
        // console.log('Please wait before retrying.');
        // console.log(err.message);

      }
      
      }
    )
    // console.log(this.passwordResetForm.value);
  }

}
