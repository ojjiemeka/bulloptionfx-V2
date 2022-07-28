import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  /**
   * If the user is logged in, return true, otherwise navigate to the login page and return false
   * @returns A boolean value.
   */
  canActivate() {
    if(this.auth.isLoggedIn()){
      return true;
    }

    this.router.navigate(['/login'])
    return false;
  }
  
}
