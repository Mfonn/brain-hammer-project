import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { NouisliderModule } from 'ng2-nouislider';import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { Daterangepicker } from 'ng2-daterangepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { ApphomelayoutComponent } from './apphomelayout/apphomelayout.component';
import { AppinnerlayoutComponent } from './appinnerlayout/appinnerlayout.component';
import { LandingComponent } from './authlayout/landing/landing.component';
import { SigninComponent } from './authlayout/signin/signin.component';
import { SignupComponent } from './authlayout/signup/signup.component';
import { ForgetpasswordComponent } from './authlayout/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './authlayout/resetpassword/resetpassword.component';
import { VerifyComponent } from './authlayout/verify/verify.component';
import { ThankyouComponent } from './authlayout/thankyou/thankyou.component';
import { StaticfooterComponent } from './apphomelayout/partials/staticfooter/staticfooter.component';
import { HeadermenuComponent } from './apphomelayout/partials/headermenu/headermenu.component';
import { SidebarComponent } from './apphomelayout/partials/sidebar/sidebar.component';
import { HomeComponent } from './apphomelayout/home/home.component';
import { StatsComponent } from './apphomelayout/stats/stats.component';

import { BarchartComponent } from './apphomelayout/stats/barchart/barchart.component';
import { ProfileComponent } from './appinnerlayout/profile/profile.component';
import { StyleComponent } from './appinnerlayout/style/style.component';
import { FooterinfoComponent } from './appinnerlayout/partials/footerinfo/footerinfo.component';
import { HeaderbackComponent } from './appinnerlayout/partials/headerback/headerback.component';
import { ChatlistComponent } from './appinnerlayout/chatlist/chatlist.component';
import { MessagesComponent } from './appinnerlayout/messages/messages.component';
import { NotificationsComponent } from './appinnerlayout/notifications/notifications.component';
import { PagesComponent } from './appinnerlayout/pages/pages.component';
import { SettingsComponent } from './appinnerlayout/settings/settings.component';
import { FaqsComponent } from './appinnerlayout/faqs/faqs.component';
import { TimelineComponent } from './appinnerlayout/timeline/timeline.component';
import { UserlistComponent } from './appinnerlayout/userlist/userlist.component';
import { ContactusComponent } from './appinnerlayout/contactus/contactus.component';
import { PricingComponent } from './appinnerlayout/pricing/pricing.component';
import { TermsandcoditionComponent } from './appinnerlayout/termsandcodition/termsandcodition.component';
import { PagenotfoundComponent } from './appinnerlayout/pagenotfound/pagenotfound.component';
import { BlogComponent } from './appinnerlayout/blog/blog.component';
import { BlogdetailsComponent } from './appinnerlayout/blogdetails/blogdetails.component';
import { SplashComponent } from './authlayout/splash/splash.component';
import { Thankyou2Component } from './authlayout/thankyou2/thankyou2.component';
import { DoughnutChartComponent } from './apphomelayout/stats/doughnut-chart/doughnut-chart.component';
import { SmallchartoneComponent } from './apphomelayout/stats/smallchartone/smallchartone.component';
import { SmallchartwoComponent } from './apphomelayout/stats/smallchartwo/smallchartwo.component';
import { SmallcharthreeComponent } from './apphomelayout/stats/smallcharthree/smallcharthree.component';
import { SmallcharfourComponent } from './apphomelayout/stats/smallcharfour/smallcharfour.component';
import { PayComponent } from './apphomelayout/pay/pay.component';
import { SendmoneyComponent } from './apphomelayout/sendmoney/sendmoney.component';
import { ReceivemoneyComponent } from './apphomelayout/receivemoney/receivemoney.component';
import { BillsComponent } from './apphomelayout/bills/bills.component';
import { RewardsComponent } from './apphomelayout/rewards/rewards.component';
import { WalletComponent } from './apphomelayout/wallet/wallet.component';
import { DoughnutchartwalletComponent } from './apphomelayout/wallet/doughnutchartwallet/doughnutchartwallet.component';
import { Sendmoney1Component } from './appinnerlayout/sendmoney1/sendmoney1.component';
import { Sendmoney2Component } from './appinnerlayout/sendmoney2/sendmoney2.component';
import { Sendmoney3Component } from './appinnerlayout/sendmoney3/sendmoney3.component';
import { AllreceivemoneyComponent } from './appinnerlayout/allreceivemoney/allreceivemoney.component';
import { WithdrawComponent } from './appinnerlayout/withdraw/withdraw.component';
import { Thankyou3Component } from './appinnerlayout/thankyou3/thankyou3.component';
import { Thankyou4Component } from './appinnerlayout/thankyou4/thankyou4.component';
import { AddmoneyComponent } from './appinnerlayout/addmoney/addmoney.component';
import { AboutusComponent } from './appinnerlayout/aboutus/aboutus.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthlayoutComponent,
    ApphomelayoutComponent,
    AppinnerlayoutComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    VerifyComponent,
    ThankyouComponent,
    StaticfooterComponent,
    HeadermenuComponent,
    SidebarComponent,
    HomeComponent,
    StatsComponent,
    BarchartComponent,
    ProfileComponent,
    StyleComponent,
    FooterinfoComponent,
    HeaderbackComponent,
    ChatlistComponent,
    MessagesComponent,
    NotificationsComponent,
    PagesComponent,
    SettingsComponent,
    FaqsComponent,
    TimelineComponent,
    UserlistComponent,
    ContactusComponent,
    PricingComponent,
    TermsandcoditionComponent,
    PagenotfoundComponent,
    BlogComponent,
    BlogdetailsComponent,
    SplashComponent,
    Thankyou2Component,
    DoughnutChartComponent,
    SmallchartoneComponent,
    SmallchartwoComponent,
    SmallcharthreeComponent,
    SmallcharfourComponent,
    PayComponent,
    SendmoneyComponent,
    ReceivemoneyComponent,
    BillsComponent,
    RewardsComponent,
    WalletComponent,
    DoughnutchartwalletComponent,
    Sendmoney1Component,
    Sendmoney2Component,
    Sendmoney3Component,
    AllreceivemoneyComponent,
    WithdrawComponent,
    Thankyou3Component,
    Thankyou4Component,
    AddmoneyComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    NouisliderModule,
    FullCalendarModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
