import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { SupportComponent } from './pages/user/support/support.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { HistoryComponent } from './pages/user/history/history.component';
import { HomeComponent } from './pages/user/home/home.component';
import { PlansComponent } from './pages/user/plans/plans.component';
import { PortfolioComponent } from './pages/user/portfolio/portfolio.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { TradeComponent } from './pages/user/trade/trade.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthGuard } from './guard/auth.guard';
import { PasswordResetComponent } from './pages/auth/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: WelcomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: 'dashboard', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'trade', component: TradeComponent, canActivate:[AuthGuard] },
  { path: 'plans', component: PlansComponent, canActivate:[AuthGuard] },
  { path: 'portfolio', component: PortfolioComponent, canActivate:[AuthGuard] },
  { path: 'edit-profile/:id', component: EditProfileComponent, canActivate:[AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate:[AuthGuard] },
  { path: 'support', component: SupportComponent, canActivate:[AuthGuard] },
  
  /* This is a wildcard route. It will match any route that is not defined. */
  { path: '**', component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
