import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeableBrowser} from '@ionic-native/themeable-browser/ngx';
import { AppLauncher } from '@ionic-native/app-launcher/ngx';
import { NavController } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http'
import{SocialSharing} from '@ionic-native/social-sharing/ngx'

import {AdMobFree} from '@ionic-native/admob-free/ngx'

import{RatepopoverComponent} from './ratepopover/ratepopover.component'



@NgModule({
  declarations: [AppComponent,RatepopoverComponent],
  entryComponents: [RatepopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ThemeableBrowser,
    AppLauncher,
   SocialSharing,
  AdMobFree,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
