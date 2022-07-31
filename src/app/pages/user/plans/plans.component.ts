import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  public basicForm!: FormGroup
  public premiumForm!: FormGroup
  public executiveForm!: FormGroup
  public depositForm!: FormGroup
  public withdrawalForm!: FormGroup
  UserProfile: any = [];
  message: any

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private userDataService: UserDataService,
    private toast: HotToastService,

  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.basicPlanForm();
    this.premiumPlanForm();
    this.executivePlanForm();
  }

  // getUserData(){
  //   this.UserProfile = (this.userDataService.getLocalUser());
  //     // console.log(this.UserProfile)  
  // }

  getUserData(){
    this.authService.getUser().subscribe(user =>{
      this.UserProfile = user.user;
      // console.log(this.UserProfile)  
    });
  }

  basicPlanForm(){
    this.basicForm = this.formBuilder.group({
      amount: ['500']
    })
    // console.log(this.basicForm.value);
  }

  basicPlan(){
    this.userDataService.basicPlanSub(this.basicForm.value).subscribe(
      (data) => {
        this.toast.show(data.message);
        // this.message = data;
        // console.log(data.message);
      },
      err => {
        this.toast.error('Something went wrong');
        // this.message = err;
        // console.log(err);
      }
    )
  }

  premiumPlanForm(){
    this.premiumForm = this.formBuilder.group({
      amount: ['2250']
    })
    // console.log(this.premiumForm.value);
  }

  premiumPlan(){
    this.userDataService.premiunPlanSub(this.premiumForm.value).subscribe(
      (data) => {
        this.toast.show(data.message);
        // this.message = data;
        // console.log(data.message);
      },
      err => {
        this.toast.error('Something went wrong');
        // this.message = err;
        // console.log(err);
      }
    )
  }

  executivePlanForm(){
    this.executiveForm = this.formBuilder.group({
      amount: ['8000']
    })
    // console.log(this.executiveForm.value);
  }

  executivePlan(){
    this.userDataService.executivePlanSub(this.executiveForm.value).subscribe(
      (data) => {
        this.toast.show(data.message);
        // this.message = data;
        // console.log(data.message);
      },
      err => {
        this.toast.error('Something went wrong');
        // this.message = err;
        // console.log(err);
      }
    )
  }

}
