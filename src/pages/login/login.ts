import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import {HomePage} from '../home/home';
import {UserSettings} from '../../shared/shared';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pass:any
  item:any
  submitted = false

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userSettings: UserSettings,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

  loginOldUser(value:{email:string, password:string}){
    this.userSettings.oldUser(value.email).then((values) => {
      this.pass = values
      if(this.pass === value.password) {
        this.navCtrl.push(HomePage);
        return true
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
    this.navCtrl.push(SignupPage)
  }

}
