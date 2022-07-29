import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle:boolean = true;
  container: any
  
  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private http: HttpClient,

  ) { }


  ngOnInit(): void {
  }

  change(){
    console.log('click')
    this.toggle = !this.toggle;
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