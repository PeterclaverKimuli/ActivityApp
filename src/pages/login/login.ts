import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import {HomePage} from '../home/home';
import {UserSettings} from '../../shared/shared';

@IonicPage({
  // name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userSettings: UserSettings,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

  loginOldUser($event, value:{email:string, password:string}){
    this.userSettings.oldUser(value.email).then((values) => {
      if(values === value.password) {
        this.userSettings.addLoggedUser({email:value.email})
        let item = {email:value.email, password:value.password}
        this.navCtrl.push(HomePage, item);
      }
      else{
        let confirm = this.alertController.create({
          title: 'Wrong informaton',
          message: 'The information is wrong. Please check either your email or password.',
          buttons: [
            {
              text: 'OK'
            }
          ]
        })
        confirm.present()
      }
    })
  }

  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

}
