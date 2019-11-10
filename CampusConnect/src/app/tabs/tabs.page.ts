import { Component } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  user=this.cookies.get("userId");
  constructor(public afAuth: AngularFireAuth,
              public cookies:CookieService) {}
 
  ngOnInit() {
  }
}
