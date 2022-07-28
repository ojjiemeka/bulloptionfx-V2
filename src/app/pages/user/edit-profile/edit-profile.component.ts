import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { UserDataService } from 'src/app/service/user-data.service';
import { AuthService } from 'src/app/service/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public editForm!: FormGroup
  public editPasswordForm!: FormGroup
  submitted = false;
  error: any;
  roq: any
  UserProfile: any = null;
  userID: string = '';
  updatedID: any
  storageData: any



  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private userDataService: UserDataService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private toast: HotToastService,


  ) { }

  ngOnInit(): void {
    this.getUserData();
    // this.getUser();
    this.editProfile();
    this.changePassword();
    this.getUserID();

  }

 /**
  * This function is used to get the userID from the URL
  */
  getUserID(){
    this.activatedRoute.params.subscribe(data =>{
      this.userID = data['id']
    })
  }

  /**
   * The function getUserData() is called when the page is loaded. It calls the function getLocalUser()
   * from the userDataService.ts file. The function getLocalUser() returns the user data from the local
   * storage. The user data is stored in the variable UserProfile
   */
  getUserData(){
    // this.authService.getUser().subscribe(user =>{
    //   this.UserProfile = user.user;
    //   console.log(this.UserProfile); 
    // });
    this.UserProfile = (this.userDataService.getLocalUser());
      // console.log(this.UserProfile)  
      // console.log(this.UserProfile['fname'])  
      // console.log('removed this');
  }

  /**
   * This function is used to edit the user's profile
   */
  editProfile(){
    this.editForm = new FormGroup({
      // id: new FormControl (this.UserProfile['id'] ),
      fname: new FormControl (this.UserProfile['fname'] ),
      lname: new FormControl (this.UserProfile['lname'] ),
      email: new FormControl (this.UserProfile['email']),
      phonenumber: new FormControl (this.UserProfile['phonenumber']),
      nationality: new FormControl (this.UserProfile['nationality']),
    })
  }

  clearBtn(): void{
    this.editForm.reset();
  }

  /**
   * The function editBtn() is called when the user clicks on the update button. It calls the function
   * updateUser() from the auth.service.ts file. The function updateUser() takes in the userID and the
   * user data as parameters. The user data is stored in the variable editForm.value. The function
   * updateUser() returns the updated user data. The updated user data is stored in the variable data.
   * The function toast.success() is called to display a message to the user. The function
   * editForm.reset() is called to clear the form
   */
  editBtn(){
    // console.log(this.editForm.value);
    this.authService.updateUser(this.userID, this.editForm.value).subscribe({
     
      next: user => {
        this.toast.success('Update Successful');
        this.editForm.reset();
        this.authService.getUser().subscribe(user =>{
          localStorage.removeItem("userInfo");
          localStorage.setItem('userInfo', JSON.stringify(user));
        });
      },
      error: err => {
        this.toast.error('Something went wrong');
      }
    });

    setTimeout(() => location.reload(),2000);
      // this.router.navigate(['/profile']);
  }

  /**
   * The function changePassword() is used to create a form group with three form controls:
   * old_password, new_password, and password_confirmation. The form controls are validated using the
   * Validators.required and Validators.minLength(8) validators. The ConfirmedValidator() function is
   * used to validate the password_confirmation form control
   */
  changePassword(){
    this.editPasswordForm = this.formBuilder.group({
      old_password: ['', [Validators.required, Validators.minLength(8)]],
      new_password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    },
    {
      validator: this.ConfirmedValidator('new_password', 'password_confirmation'),
    }
    )
  }

   /**
   * It returns the controls of the loginForm
   * @returns The form controls.
   */
    get f() {
      return this.editPasswordForm.controls;
    }

  /**
   * If the value of the controlName control is not equal to the value of the matchingControlName
   * control, then set the confirmedValidator error on the matchingControlName control
   * @param {string} controlName - The name of the control that you want to validate.
   * @param {string} matchingControlName - The name of the control that we want to compare the value of
   * the controlName control to.
   * @returns A function that takes a formGroup as a parameter.
   */
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

  changePasswordBtn(){
    console.log(this.editPasswordForm.value);
  }

}
