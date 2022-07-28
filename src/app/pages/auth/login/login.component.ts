import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private token: TokenService,
    private toast: HotToastService,


  ) { }

  ngOnInit(): void {
    this.form();
  }

  form(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  /**
   * It returns the controls of the loginForm
   * @returns The form controls.
   */
  get f() {
    return this.loginForm.controls;
  }

  login(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

      // calls service and gets info
    this.authService.login(this.loginForm.value).subscribe({
     
      next: user => {
        this.isLoggedIn = true;
        this.responseHandler(user);
        // this.reloadPage();
        this.router.navigate(['/dashboard']);

        if(user){
          // alert('Login Successful');
          this.toast.success('Login Successful');
          this.loginForm.reset();
          this.token.handleToken(user.token);
          localStorage.setItem('userInfo', JSON.stringify(user));
          localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
          // this.router.navigate(['/dashboard']);
          // return user;
          // console.log(user.token);
          // console.log(user);
          // return user;
        }
      },
      error: err => {
        this.toast.error('Invalid Credentials, ');
        this.isLoginFailed = true;
        this.router.navigate(['/login']);
      }
    });
    // console.log(this.loginForm.value);
  }

     // Handle response
     responseHandler(data:any) {
      this.token.handleToken(data.access_token);
    }
 
}
