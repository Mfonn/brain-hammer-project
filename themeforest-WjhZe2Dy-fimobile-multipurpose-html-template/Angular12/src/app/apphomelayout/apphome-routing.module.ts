import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { ApphomelayoutComponent } from './apphomelayout.component';
import { ProfileComponent } from '../appinnerlayout/profile/profile.component';
import { StyleComponent } from '../appinnerlayout/style/style.component';
import { ReceivemoneyComponent } from './receivemoney/receivemoney.component';
import { BillsComponent } from './bills/bills.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { PayComponent } from './pay/pay.component';
import { RewardsComponent } from './rewards/rewards.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path:'',
    component: ApphomelayoutComponent,

    children:[
      {
        path:'home',
        component: HomeComponent
      },      
      {
        path:'stats',
        component: StatsComponent
      },      
      {
        path:'pay',
        component: PayComponent
      },     
      {
        path:'sendmoney',
        component: SendmoneyComponent
      },     
      {
        path:'bills',
        component: BillsComponent
      },     
      {
        path:'receivemoney',
        component: ReceivemoneyComponent
      },
      {
        path:'rewards',
        component: RewardsComponent
      },   
      {
        path:'wallet',
        component: WalletComponent
      }, 
      {
        path:'style',
        component: StyleComponent
      },   
      {
        path:'profile',
        component: ProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class ApphomelayoutRoutingModule { }
