import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free/ngx";
import { Component } from "@angular/core";
import { Platform, ToastController } from "@ionic/angular";

import {
  ThemeableBrowser,
  ThemeableBrowserOptions,
  ThemeableBrowserObject,
} from "@ionic-native/themeable-browser/ngx";

import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import {
  AppLauncher,
  AppLauncherOptions,
} from "@ionic-native/app-launcher/ngx";

import { RatepopoverComponent } from "../ratepopover/ratepopover.component";

import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private themeableBrowser: ThemeableBrowser,
    private socialSharing: SocialSharing,
    public adMobFree: AdMobFree,
    private appLauncher: AppLauncher,
    public platform: Platform,
    private toastController: ToastController,

    public popoverController: PopoverController
  ) {
    //constructor
  }

  // social sharing top
  shareApp() {
    this.socialSharing.shareViaWhatsApp(
      "Indian Railway complete imformation at one place ",
      null,
      "https://play.google.com/store/apps/details?id=com.trv.trainstatus"
    );
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: RatepopoverComponent,
      cssClass: "my-custom-class",

      translucent: true,
    });
    return await popover.present();
  }

  // social sharing top end

  // brower app

  openBrowser(url: any, title: string) {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 65,
        color: "#3573bbff",
      },
      title: {
        color: "#ffffffff",
        showPageTitle: true,
        staticText: title,
      },
      backButton: {
        wwwImage: "assets/icon/left-arrow.png",
        align: "left",
        event: "backPressed",
      },
      forwardButton: {
        wwwImage: "assets/icon/right-arrow.png",
        align: "left",
        event: "forwardPressed",
      },
      closeButton: {
        wwwImage: "assets/icon/close.png",
        align: "right",
        event: "closePressed",
      },
      customButtons: [
        {
          wwwImage: "assets/icon/reload.png",
          align: "right",
          event: "reload",
        },
      ],
      clearcache: false,
      clearsessioncache: false,
      backButtonCanClose: true,
    };

    const browser: ThemeableBrowserObject = this.themeableBrowser.create(
      url,
      "_blank",
      options
    );

    browser.on("closePressed").subscribe((data) => {
      browser.close();
    });
    browser.on("reload").subscribe((data) => {
      browser.reload();
    });
  }

  pnr() {
    let url = "https://www.confirmtkt.com/pnr-status";
    this.openBrowser(url, "pnr status");
  }

  runningstatus() {
    let url = "https://enquiry.indianrail.gov.in/mntes/";
    this.openBrowser(url, "running status");
  }

  route() {
    let url = "https://www.google.com/amp/s/www.confirmtkt.com/train-schedule";
    this.openBrowser(url, "route");
  }

  seatavailablity() {
    let url = "https://www.ixigo.com/trains";
    this.openBrowser(url, "seat availablity");
  }

  platformtrain() {
    let url = "https://www.ixigo.com/trains/platform-locator";
    this.openBrowser(url, "Train news");
  }

  speed() {
    let url = "https://www.realrailway.com/en/speed/spm1.html";
    this.openBrowser(url, "train speed");
  }

  chart() {
    let url = "https://www.irctc.co.in/online-charts/";
    this.openBrowser(url, "chart status");
  }

  fare() {
    let url = "https://www.trainman.in/fare";
    this.openBrowser(url, "fare");
  }

  //slider

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  };

  //slider function
  prediction() {
    let url = "https://m.etrain.info/pnr-status";
    this.openBrowser(url, "prediction of WL");
  }

  book() {
    let url = "https://www.irctc.co.in/nget/train-search";
    this.openBrowser(url, "Train booking");
  }

  shareoption() {
    var optionshare = {
      message: "it is best app for indian Railway inquiry ",
      url: "https://play.google.com/store/apps/details?id=com.trv.trainstatus",
    };
    this.socialSharing.shareWithOptions(optionshare);
  }

  //slider function end

  //end browser app

  //app launcher

  launchApp(pkg: any) {
    var options: AppLauncherOptions = {
      packageName: pkg,
    };

    this.appLauncher.canLaunch(options).then(
      (launched: Boolean) => {
        if (launched) {
          this.appLauncher.launch(options).then(
            () => { },
            (err) => {
              alert(JSON.stringify(err));
            }
          );
        } else {
          alert("unable to launch");
        }
      },
      (err) => {
        this.presentToast();
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Your have not installed this App",
      duration: 1000,
    });
    toast.present();
  }

  //end of class
}
