import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CoinApiService } from 'src/app/service/coin-api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';
import { TokenService } from 'src/app/service/token.service';

declare const TradingView: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private coinApi: CoinApiService,
    private authService: AuthService,
    private userDataService: UserDataService,
    private token: TokenService,
    private router: Router,
    private toast: HotToastService,

  ) { }

  showHistory: any = [];
  UserProfile: any = null;
  bannerData :any = [];
  btcData : any;
  marketData : any;

  ngOnInit(): void {
    this.getUserData();
    this.getCryptoData();
    this.getMarketData();
    // gets userHistory
    // this.getHistoryData();

  }

  ngAfterViewInit(){
    new TradingView.widget({
      "width": "100%",
      "height": "380px",
      // "autosize": true,
      "symbol": "BITSTAMP:BTCUSD",
      "interval": "3",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_d1922"
  });
  }

//   getBannerData(){
//     this.coinApi.getTrendingCurrency('usd').subscribe(res =>{
//         console.log(res);
//     })
//   }

//   getAllData(){
//     this.coinApi.getCurrency('usd').subscribe(data => {
//         console.log(data);
//         }
//     )
//   }

// getUserData(){
//   this.UserProfile = (this.userDataService.getLocalUser());
//     // console.log(this.UserProfile)  
// }

getUserData(){
  this.authService.getUser().subscribe(user =>{
    this.UserProfile = user.user;
    // console.log(this.UserProfile)  
  });
}

getCryptoData(){
    this.coinApi.getCoinData().subscribe(res => {
        // console.log(res);
        this.bannerData = res;
        this.btcData = res[0];
        // console.log(res[0]);
    })
}

getMarketData(){
    this.coinApi.getMarketCap().subscribe(res => {
        // console.log(res);
        this.marketData = res;
        // console.log(res);
    })
}


getHistoryData(){
  this.userDataService.getHistory().subscribe({
    next: userHistory =>{
      if(userHistory){
        localStorage.setItem('history', JSON.stringify(userHistory));
      
      // console.log(this.showHistory.data);
      }
      error:()=>{
        this.toast.error('Invalid Credentials, ');
      }
    }
  })
}
  

}
