import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  UserProfile: any = [];

  constructor(
    private userDataService: UserDataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.UserProfile = (this.userDataService.getLocalUser());
      console.log(this.UserProfile)  
  }

 /**
  * The function is called when the user clicks on the profile button in the navbar. It calls the
  * getUser() function in the authService.ts file, which returns the user's data from the database. The
  * user's data is then stored in the UserProfile variable
  */
  // getUserData(){
  //   this.authService.getUser().subscribe(user =>{
  //     this.UserProfile = user.user;
  //     // console.log(this.UserProfile)  
  //   });
  // }

}
