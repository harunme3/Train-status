import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import{SocialSharing} from '@ionic-native/social-sharing/ngx'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private socialSharing:SocialSharing
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar. styleLightContent();
      this.splashScreen.hide();
    });
  }



share_with_all_option()
{
  var optionshare = {
    message: 'it is best app for indian Railway inquiry ', 
    url: 'https://play.google.com/store/apps/details?id=com.trv.trainstatus',
   };
  this.socialSharing.shareWithOptions(optionshare);
}



}
