import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CookieService } from "ngx-cookie-service";
import {Router} from "@angular/router";

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
    public cookies:CookieService,
    public router:Router
  ) {
    this.initializeApp();
  }
  userId = this.cookies.get("userId");

  goProfile() {
    this.router.navigate(['/account-page']);
  }
  logOut() {
    this.cookies.delete("userId");
    this.router.navigate(['/login']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
