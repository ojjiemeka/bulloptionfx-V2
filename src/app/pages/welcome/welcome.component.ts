import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  sidebar: boolean = false;
  scroll: boolean = false;
  year: any;

  constructor() { }

  ngOnInit(): void {
   this.getYear();
  }

  @HostListener('body:page-header', ['$event']) onScroll(event: any) {
    console.log(event);

  }

  showSidebar(){
    this.sidebar = !this.sidebar; 
    console.log('works')
  }

  // onScroll(event: Event) {
  //   this.scroll = !this.scroll; 
  //   const value= event.target;
  //   console.log(value);
  //  }

  getYear(){
    this.year = new Date().getFullYear();
  }


}
