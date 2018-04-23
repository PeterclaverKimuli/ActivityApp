import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UserSettings} from '../../shared/shared'
import {HomePage} from '../home/home'

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userSettings: UserSettings) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage')
  }

  makeActivity(value:{activity:string}){
    this.userSettings.addActivity(value.activity)
    this.navCtrl.push(HomePage)
  }

}
