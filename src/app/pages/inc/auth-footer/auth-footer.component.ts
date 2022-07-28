import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-footer',
  templateUrl: './auth-footer.component.html',
  styleUrls: ['./auth-footer.component.css']
})
export class AuthFooterComponent implements OnInit {

  year: any

  constructor() { }

  ngOnInit(): void {
    this.getYear();
  }

  getYear(){
    this.year = new Date().getFullYear();
    // console.log(this.year);
  }

}
