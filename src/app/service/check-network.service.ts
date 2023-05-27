import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckNetworkService {

  constructor(
    private http: HttpClient,
  ) { }

  // $base_URL = "https://api.bulloptionfx.com/api";
  $base_URL = "http://127.0.0.1:8000/api";

  networkAvailability(): any {
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    return this.http.get(this.$base_URL + httpOptions);
  }
}
