import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/service/auth.service';
import { UserDataService } from 'src/app/service/user-data.service';
import {Clipboard} from '@angular/cdk/clipboard';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public depositForm!: FormGroup
  public withdrawalForm!: FormGroup
  UserProfile: any = null;
  currency: any;
  value = 'bc1q67e3fgvhp9rhavjl0m08w08uwuvawkcr3nzdq3';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userDataService: UserDataService,
    private toast: HotToastService,
    private clipboard: Clipboard


  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.formDeposit();
    this.formWithdraw();
    this.getCurrencyList();
  }

  getUserData(){
    this.authService.getUser().subscribe(user =>{
      this.UserProfile = user.user;
      // console.log(this.UserProfile)  
    });
  }

  getCurrencyList(){
    this.userDataService.getCurrency().subscribe(data =>{
      this.currency = data.currencies;
      // console.log(this.currency)  
    });
  }

  copy(){
    this.toast.show("Address Copied Successfully!!");
  }

  formDeposit(){
    this.depositForm = this.formBuilder.group({
      amount: [''],
      payment_option: [''],
      currency_withdrawn: ['']
    })
  }

  formWithdraw(){
    this.withdrawalForm = this.formBuilder.group({
      payment_option: [''],
      amount: [''],
      currency_withdrawn: [''],
      wallet_address: [''],
    })
  }

  submitDeposit(){
    // console.log(this.depositForm.value);
    this.userDataService.deposit(this.depositForm.value).subscribe(
      (res) => {
        // console.log(res);
        this.toast.show(res.message);
      }
    )
  }

  submitWithdrawal(){
    console.log(this.withdrawalForm.value);
    this.userDataService.withdrawal(this.withdrawalForm.value).subscribe(
      (res) => {
        // console.log(res);
        this.toast.show(res.message);
      })
  }

}
