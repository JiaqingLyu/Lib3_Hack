import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {InAppBrowserOptions} from "@ionic-native/in-app-browser";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public iab: InAppBrowser) {}

    Tutor() {

        const options : InAppBrowserOptions = {
            location:'no'
        }
        const browser = this.iab.create('https://tutortrac.umkc.edu/tracweb40/default.html','_blank', options);
    }


    Scholarship() {

        const options : InAppBrowserOptions = {
            location:'no'
        }
        const browser = this.iab.create('https://finaid.umkc.edu/financial-aid/scholarships/','_blank', options);
    }
    Cashiers() {

        const options : InAppBrowserOptions = {
            location:'no'
        }
        const browser = this.iab.create('https://www.umkc.edu/finadmin/cashiers/','_blank', options);
    }

    conct() {
        const options : InAppBrowserOptions = {
            location:'no'
        }
        const browser = this.iab.create('https://shib-idp.umsystem.edu/idp/profile/SAML2/POST/SSO;jsessionid=FEC0B4D3071DAE5D840B62C9C3AB160E?execution=e1s1','_blank', options);
    }
}
