import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  constructor(public cookies:CookieService,public router:Router) { }
  userId=this.cookies.get("userId");
  goBack() {
    this.router.navigate(['/tabs/news'])
  }
  ngOnInit() {
  }

}
