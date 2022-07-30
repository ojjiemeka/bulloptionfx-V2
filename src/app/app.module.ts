import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PlansComponent } from './pages/user/plans/plans.component';
import { NotificationComponent } from './pages/user/notification/notification.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './pages/inc/header/header.component';
import { FooterComponent } from './pages/inc/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { PortfolioComponent } from './pages/user/portfolio/portfolio.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthFooterComponent } from './pages/inc/auth-footer/auth-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NetworkInterceptor } from './utils/network.interceptor';
import { LoadingSpinnerComponent } from './pages/inc/loading-spinner/loading-spinner.component';
import { TradeComponent } from './pages/user/trade/trade.component';
import { HistoryComponent } from './pages/user/history/history.component';
import { SupportComponent } from './pages/user/support/support.component';
import { PasswordResetComponent } from './pages/auth/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PlansComponent,
    NotificationComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    EditProfileComponent,
    PortfolioComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    AuthFooterComponent,
    LoadingSpinnerComponent,
    TradeComponent,
    HistoryComponent,
    SupportComponent,
    PasswordResetComponent,
    ForgotPasswordComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [{
   /* A way to intercept all the http requests and responses. */
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
