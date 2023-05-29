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
  walletAddress: string = '';
  type: string = '';
  textToCopy: string = '';
  addresses: { wallet_address: string, type: string }[] = [];

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
    this.showWalletAddress();
    this.formWithdraw();
    this.getCurrencyList();
  }

  getUserData(){
    this.authService.getUser().subscribe(user =>{
      this.UserProfile = user.user;
      // console.log(this.UserProfile)  
    });
  }

  // showWalletAddress() {
  //   this.userDataService.getWalletAddress().subscribe({
  //     next: (data) => {
  //       const addresses = data['address'];
  //       addresses.forEach((address: { [x: string]: string; }) => {
  //         this.walletAddress = address['wallet_address'];
  //         this.type = address['type'];
  //         console.log(this.walletAddress)
  //         console.log(this.type)
  //       });
  //     }
  //   });
  // }

  copyText(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => {
        this.toast.show('Copied');
        console.log(text);
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });
  }

  showWalletAddress() {
    this.userDataService.getWalletAddress().subscribe({
      next: (data) => {
        const addresses = data['address'];
        this.addresses = addresses.map((address: { [x: string]: any; }) => ({
          wallet_address: address['wallet_address'],
          type: address['type']
        }));
      }
    });
  }
  
 
  getCurrencyList(){
    this.userDataService.getCurrency().subscribe(data =>{
      this.currency = data.currencies;
      // console.log(this.currency)  
    });
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
