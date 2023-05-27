import { Component,HostListener,  OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css'],
  animations: [
    trigger('modalAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('300ms')),
      transition(':leave', animate('300ms')),
    ]),
  ],
})
export class RealEstateComponent implements OnInit {
  
  sidebar: boolean = false;
  scroll: boolean = false;
  year: any;
  modalVisible = false;
  
  // @Input() modalState: string;
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


  getYear(){
    this.year = new Date().getFullYear();
  }
}
