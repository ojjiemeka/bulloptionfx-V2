import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinApiService {

  api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  constructor(
    private http: HttpClient
  ) { }

  getCoinData(){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false`)
  }

  getMarketCap(){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false`)
  }

  // getCurrency(currency:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  // }
  // getTrendingCurrency(currency:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  // }
  // getGrpahicalCurrencyData(coinId:string, currency:string, days: number){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  // }
  // getCurrencyById(coinId:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  // }

}
