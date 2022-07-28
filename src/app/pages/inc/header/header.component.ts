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

  ) { }


  ngOnInit(): void {
  }

  change(){
    console.log('click')
    this.toggle = !this.toggle;
  }

  logoutBtn(){
    this.authService.logout().subscribe(
      data => {
        // this.toast.show(data.message);
        // localStorage.clear();
        // this.router.navigate(['/login']);
        console.log(data)
      }
    )
    console.log('clicked')
  }
}