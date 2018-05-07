import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import {HomePage} from '../home/home';
import {UserSettings} from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userSettings: UserSettings,
              private alertController: AlertController) {
  }

  registerNewUser($event, value:{email:string, password:string, password1:string}){

    var atpos = value.email.indexOf('@')
    var dotpos = value.email.lastIndexOf('.')

    if(value.password!==value.password1){
      let confirm = this.alertController.create({
        title: 'Unmatched Passwords',
        message: 'The passwords do not match.',
        buttons: [
          {
            text: 'OK'
          }
        ]
      })
      confirm.present()
    }

    else if(atpos<1 || (dotpos-atpos)<2){
      let confirm = this.alertController.create({
        title: 'Invalid Email',
        message: 'Please enter a valid email address',
        buttons: [
          {
            text: 'OK'
          }
        ]
      })
      confirm.present()
    }
    
    else if(value.password.length<5){
      let confirm = this.alertController.create({
        title: 'Weak Password',
        message: 'The password should have 5 or more characters.',
        buttons: [
          {
            text: 'OK'
          }
        ]
      })
      confirm.present()
    }

    else{
      this.userSettings.newUser(value).then((user) =>{
        if(user===false){
          let confirm = this.alertController.create({
            title: 'Duplicate Email',
            message: 'The Email address has already been used.',
            buttons: [
              {
                text: 'OK'
              }
            ]
          })
          confirm.present()
        }
        else{
          this.userSettings.addLoggedUser({email:value.email})
          let item = {email:value.email, password:value.password}
          this.navCtrl.push(HomePage, item)
        }
      })
      
    }
    }

  goToLogin(){
    this.navCtrl.pop()
  }

}
