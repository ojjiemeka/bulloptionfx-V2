import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/service/user-data.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {
  UserProfile: any;

  constructor(
    private userDataService: UserDataService,
    private authService: AuthService,

  ) { }

  resolve(): Observable<any> {
    return this.userDataService.getLocalUser();
    // return this.authService.getUser();

    // return this.authService.getUser().subscribe({
    //     next: (user) => {
    //       this.UserProfile = user;
    //     },
    //     error: (error) => {
    //       console.error('User API error:', error);
    //     }
    //   });
  }
}
