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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userSettings: UserSettings,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginOldUser(value:{email:string, password:string}){
    this.userSettings.olduser(value.email).then((values) => {
      this.pass = values
      if(this.pass === value.password) {
        this.navCtrl.push(HomePage)
      }
      else{
        let confirm = this.alertController.create({
          title: 'Wrong Password',
          message: 'Please input a correct password.',
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
