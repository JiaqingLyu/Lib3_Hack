import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(private router: Router, public afAtuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async  register(){
    const{ username, password, cpassword } = this
    if(password !== cpassword){
      return console.error("Passwords don't match!")
    }

    try{
      const res = await this.afAtuth.auth.createUserWithEmailAndPassword(username,password)
      this.router.navigate(['login']);
      console.log(res)
    } catch (err) {
      console.dir(err)
      if(err.code === "auth/weak-password"){
        console.log("weak password")
      }
    }
  }

}
