import { Component, OnInit } from "@angular/core";
import { AngularFireAuth} from "@angular/fire/auth";
import { NavController } from "@ionic/angular";
import { auth } from 'firebase/app'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit{

  username: string = ""
  password: string = ""

  constructor(private navCtrl: NavController,
              private router: Router,
              public afAuth: AngularFireAuth){}

  ngOnInit() {
  }

  async login(){
    const{username,password} = this
    try{
        const res = await  this.afAuth.auth.signInWithEmailAndPassword(username,password)
      this.navCtrl.navigateForward('/tabs/news');
    } catch (err) {
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("User not found")
      }
    }
  }
}
