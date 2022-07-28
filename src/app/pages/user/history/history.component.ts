import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  UserProfile: any = null;
  historyData: any;
  constructor(
    private userDataService: UserDataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.authService.getUser().subscribe(user =>{
      this.UserProfile = user.user;
      // console.log(this.UserProfile)  
    });
  }

  getHistoryData(){
    
  }

}
