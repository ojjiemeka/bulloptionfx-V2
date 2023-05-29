import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CoinApiService } from 'src/app/service/coin-api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';
import { TokenService } from 'src/app/service/token.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private route: ActivatedRoute
  ) { }

  showHistory: any[] = [];
  UserProfile: any = null;
  bannerData: any[] = [];
  btcData : any = [];
  marketData : any;
  data: Observable<any> | undefined;

  ngOnInit(): void {
      this.getUserData();
      this.getCryptoData();
      this.getMarketData();
     // Add event listener for "storage" event
    window.addEventListener('storage', this.handleStorageEvent.bind(this.getUserData()));
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

getUserData(){ 
  // this.data = this.route.data.pipe(map(data => data['data']));

  // this.data.subscribe({
  //   next: (user) => {
      // this.UserProfile = user;
  //     // console.log(this.UserProfile);
  //   },
  //   error: (error) => {
  //     console.error('User API error:', error);
  //   }
  // });
  this.UserProfile = (this.userDataService.getLocalUser());
      // console.log(this.UserProfile);

  // this.data = this.route.data.pipe(map(data => data['data']));
}

handleStorageEvent(event: StorageEvent): void {
  if (event.key === 'userInfo') {
    const userDataString = event.newValue;
    if (userDataString) {
      this.UserProfile = JSON.parse(userDataString).user;
    }
  }
}

getCryptoData(): void {
  this.coinApi.getCoinData().subscribe({
    next: (res) => {
      this.bannerData = res;
      this.btcData = res[0];
    },
    error: (error) => {
      console.error('Coin API error:', error);
    }
  });
}

getMarketData(): void {
  this.coinApi.getMarketCap().subscribe({
    next: (res) => {
      this.marketData = res;
    },
    error: (error) => {
      console.error('Market API error:', error);
    }
  });
}

getHistoryData(): void {
  this.userDataService.getHistory().subscribe({
    next: (userHistory) => {
      if (userHistory) {
        localStorage.setItem('history', JSON.stringify(userHistory));
      }
    },
    error: () => {
      this.toast.error('Invalid Credentials');
    }
  });
}
  

}
