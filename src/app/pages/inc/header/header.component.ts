import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle:boolean = true;
  container: any
  UserProfile: any = null;
  notification: any

  
  constructor(
    private authService: AuthService,
    private userDataService: UserDataService,
    private toast: HotToastService,
    private router: Router,
    private http: HttpClient,

  ) { }


  ngOnInit(): void {
    this.getUserData();
    this.logData();
  }

  getUserData(){
    this.authService.getUser().subscribe(user =>{
      this.UserProfile = user.user;
      // console.log(this.UserProfile)  
    });
  }

  change(){
    console.log('click')
    this.toggle = !this.toggle;
  }

  logData(){
    this.userDataService.getLogData().subscribe(
      res => {
        this.notification = res.log.data;
        // console.log(res.log.data);
      }
    )
  }

  logoutBtn(){
    this.authService.logout().subscribe(
      (data) => {
        localStorage.clear();
        this.toast.show('Logged Out');
        this.router.navigate(['/login']);
        // console.log(data)
      }
    );
  }
}