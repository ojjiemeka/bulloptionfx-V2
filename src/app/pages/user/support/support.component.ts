import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  public supportForm!: FormGroup
  UserProfile: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userDataService: UserDataService,

  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.form();
  }

  getUserData(){
    this.authService.getUser().subscribe(user =>{
      this.UserProfile = user.user;
      // console.log(this.UserProfile)  
    });
  }

  form(){
    this.supportForm = new FormGroup({
      email: new FormControl ('' ),
      title: new FormControl ('' ),
      description: new FormControl ('')
    })
  }

  supportBtn(){
    // console.log(this.supportForm.value)
    this.userDataService.supportMail(this.supportForm.value).subscribe(
      (res) =>{
        console.log(res)
      }
    )
  }

}
