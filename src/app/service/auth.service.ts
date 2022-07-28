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

  $base_URL = "http://127.0.0.1:8000/api";

  accessToken: any = this.token.getToken()

  signup( data: any ){
    return this.http.post<any>(this.$base_URL +'/register/', data);
  }

  login( data:any){
    return this.http.post<any>(this.$base_URL +'/login/', data);
  }

  getUser(){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        })
      };
    return this.http.get<any>(this.$base_URL +'/home/', httpOptions);
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

}
