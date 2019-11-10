import { Component } from '@angular/core';
import {InAppBrowserOptions} from "@ionic-native/in-app-browser";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public iab:InAppBrowserOptions) {}
  Career() {

    const options : InAppBrowserOptions = {
      location:'no'
    }
    const browser = this.iab.create('https://career.umkc.edu/slider/handshake/','_blank', options);
  }
  BookStore() {

    const options : InAppBrowserOptions = {
      location:'no'
    }
    const browser = this.iab.create('https://www.umkcbookstore.com/','_blank', options);
  }

  facebook() {
    const options : InAppBrowserOptions = {
      location:'no'
    }
    const browser = this.iab.create('https://www.facebook.com/UMKansasCity/','_blank', options);
  }

  Findfood() {
    const options : InAppBrowserOptions = {
      location:'no'
    }
    const browser = this.iab.create('https://www.google.com/maps/search/food/','_blank', options);
  }
}
