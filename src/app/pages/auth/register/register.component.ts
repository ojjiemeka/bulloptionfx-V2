import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm,Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public signupForm!: FormGroup
  submitted = false;
  error: any;
  passwordVisible = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService,

  ) { }

  ngOnInit(): void {
    // this.form();
  }

  togglePasswordVisibility(password: any) {
    this.passwordVisible = !this.passwordVisible;
    password.type = this.passwordVisible ? 'text' : 'password';
  }

  signup(form: NgForm) {
    this.submitted = true;
    // console.warn(form.value);
    if (!form.valid) {
      return;
    }
  
    if (form.valid) {
      this.authService.signup(form.value).subscribe({
        next: () => {
          this.toast.success('Account Creation Successful, Check Email for Login Details');
          form.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          this.toast.error('Something went wrong');
        }
      });
    } else {
      this.error = 'Please make sure all fields are properly filled';
      return this.error;
    }
  }
}
