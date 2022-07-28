import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handleToken(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  // isValidToken() {
  //   const token = this.getToken();
  //   if (token) {
  //     const payload = this.payload(token);
  //     if (payload) {
  //       return Object.values(this.issuer).indexOf(payload.iss) > -1
  //         ? true
  //         : false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean indicating whether or not the token is expired
  //   return tokenNot(token);
  // }

  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  // isLoggedIn() {
  //   return this.isValidToken();
  // }
  
  // Remove token
  removeToken() {
    // localStorage.removeItem('auth_token');
    localStorage.clear()

  }
}
