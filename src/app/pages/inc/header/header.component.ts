import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle:boolean = true;
  container: any
  
  constructor() { }


  ngOnInit(): void {
  }

  change(){
    console.log('click')
    this.toggle = !this.toggle;
  }

  logout(){
    
  }
}