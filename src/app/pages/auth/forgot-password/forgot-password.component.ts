import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toast: HotToastService,
  ) { }

  ngOnInit(): void {
    this.form();
  }

  form(){
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    })
  }

  submit(){
    this.auth.forgotPassword(this.forgotPasswordForm.value).subscribe({
      next: data => {
        this.toast.success(data.status);
        // console.log(data.status)
      },
      error: err => {
        this.toast.error('Please wait before retrying.');
        // console.log('Please wait before retrying.');
        // console.log(err.errors);

      }
      
      }
    )
    // console.log(this.forgotPasswordForm.value);
  }


}
