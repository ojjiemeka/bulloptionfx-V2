import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private count= 0;

 /* Creating a new BehaviorSubject with a default value of false. */
  // private loading = new BehaviorSubject<boolean>(false);
  private spinner$ = new BehaviorSubject<string>('');

 /* Creating an observable that can be subscribed to. */
  // public readonly loading$ = this.loading.asObservable();

  constructor(
  ) { }

  // show(){
  //   this.loading.next(true);
  // }

  // hide(){
  //   this.loading.next(false);

  // }

  getLoader(): Observable<string>{
    return this.spinner$.asObservable();
  
    }

    requestStarted(){
      if(++this.count === 1){
        this.spinner$.next('start');
      }
    }

    requestEnd(){
      if(this.count === 0 || --this.count === 0){
        this.spinner$.next('stop');
      }
    }

    resetSpinner(){
      this.count = 0;
      this.spinner$.next('stop');
    }
}
