import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

const base_URL = "http://127.0.0.1:8000/api";


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }

  accessToken: any = this.token.getToken()
  // $base_URL = "http://127.0.0.1:8000/api";
  $base_URL = "https://api.bull-option.com/api";

  $currencyAPI = "https://api.apilayer.com/currency_data/list"

  // Access user profile
  getLocalUser() {
    return JSON.parse(localStorage.getItem("userInfo") || '{}')?.user;
  }

  getHistory(){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        })
      };
  
      return this.http.get<any>(this.$base_URL +'/history', httpOptions);
  }

  getLogData(){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        })
      };
  
      return this.http.get<any>(this.$base_URL +'/log', httpOptions);
  }

  // showHistory(){
  //   return JSON.parse(localStorage.getItem("history") || '{}')?.history;
  // }

  getCurrency(){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'apikey': 'Xe32BiPHh4XzyKXKw7OX2f3zzhv9jByv'
          // 'apikey': '7MCDRPkeK3XoYd1tPpMZqqxMujuxTxns'
        })
      };
  
    return this.http.get<any>(this.$currencyAPI, httpOptions);
  }

 basicPlanSub(body: any){
  const httpOptions = { 
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      })
    };

  return this.http.post<any>(this.$base_URL +'/basic?', body, httpOptions);
 }

 premiunPlanSub(body: any){
  const httpOptions = { 
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      })
    };

  return this.http.post<any>(this.$base_URL +'/premium?', body, httpOptions);
 }

 executivePlanSub(body: any){
  const httpOptions = { 
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      })
    };

  return this.http.post<any>(this.$base_URL +'/executive?', body, httpOptions);
 }

 deposit(body: any){
  const httpOptions = { 
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      })
    };

  return this.http.post<any>(this.$base_URL +'/deposit?', body, httpOptions);
 }

 withdrawal(body: any){
  const httpOptions = { 
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      })
    };

  return this.http.post<any>(this.$base_URL +'/withdraw?', body, httpOptions);
 }

 supportMail(body: any){
  const httpOptions = { 
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      })
    };

  return this.http.post<any>(this.$base_URL +'/mail?', body, httpOptions);
 }

}
