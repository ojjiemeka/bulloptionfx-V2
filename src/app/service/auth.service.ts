import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }

  // $base_URL = "http://127.0.0.1:8000/api";
  $base_URL = "https://api.bull-option.com/api";

  accessToken: any = this.token.getToken();

  signup( data: any ){
    return this.http.post<any>(this.$base_URL +'/register', data);
  }

  login( data:any){
    return this.http.post<any>(this.$base_URL +'/login', data);
  }

  /**
   * If the accessToken is truthy, return true, otherwise return false
   * @returns A boolean value.
   */
  isLoggedIn(){
    const isLoggedIn = localStorage.getItem('auth_token');
    return isLoggedIn;
    // return !!this.accessToken;
  }

  getUser(){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        })
      };
    return this.http.get<any>(this.$base_URL +'/home', httpOptions);
  }

  updateUser(id: any, body: any){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        })
      };

    return this.http.put<any>(this.$base_URL +'/profiles/'+id, body, httpOptions);
  }

  changePassword(id: any, body: any){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        })
      };

    return this.http.put<any>(this.$base_URL +'/change-passwords/'+id, body, httpOptions);
  }

  /**
   * The function takes the access token from the local storage and sends it to the backend to be
   * destroyed
   * @returns The access token is being returned.
   */
  logout(){
    const token = localStorage.getItem('auth_token');

    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      };
  
      return this.http.post(this.$base_URL +'/logout', '', httpOptions);
  }

  forgotPassword(body: any ){
    return this.http.post<any>(this.$base_URL +'/forgot-password', body);
  }

  passwordReset(body: any){
    return this.http.post<any>(this.$base_URL +'/reset-password', body);
  }

}
