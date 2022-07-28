import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { HistoryComponent } from './pages/user/history/history.component';
import { HomeComponent } from './pages/user/home/home.component';
import { PlansComponent } from './pages/user/plans/plans.component';
import { PortfolioComponent } from './pages/user/portfolio/portfolio.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { TradeComponent } from './pages/user/trade/trade.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: WelcomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'billing', component: PlansComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'edit-profile/:id', component: EditProfileComponent },
  { path: 'history', component: HistoryComponent },
  
  /* This is a wildcard route. It will match any route that is not defined. */
  { path: '**', component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
