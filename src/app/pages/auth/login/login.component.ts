import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { HotToastService } from '@ngneat/hot-toast';
// import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public loginForm!: FormGroup
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private token: TokenService,
    private toast: HotToastService,
    // private sessionStorageService: SessionStorageService

  ) { }

  ngOnInit(): void {
    // this.form();
  }

  login(form: NgForm){
    this.submitted = true;

    if (!form.valid) {
      return;
    }

      // calls service and gets info
    this.authService.login(form.value).subscribe({
     
      next: user => {
        this.isLoggedIn = true;
        this.responseHandler(user);
        // this.reloadPage();
       

        if(user){
          // alert('Login Successful');
          this.toast.success('Login Successful');
          form.reset();
          this.token.handleToken(user.token);
          this.router.navigate(['dashboard']);
          localStorage.setItem('userInfo', JSON.stringify(user));
          localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
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
    // console.warn(form.value);
  }

     // Handle response
     responseHandler(data:any) {
      this.token.handleToken(data.access_token);
    }
 
}
