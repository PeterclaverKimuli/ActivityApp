import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ActivitiesPage} from '../activities/activities'
import {UserSettings} from '../../shared/shared'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  user: any
  activities: any[] = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userSettings:UserSettings) {
    this.user = this.navParams.data
    console.log("***navParams: ", this.user)
  }

  ionViewDidLoad() {
    this.user = this.navParams.data
    this.activities = this.userSettings.getActivity()
    console.log('ionViewDidLoad HomePage')

  }

  makeNewActivities(){
    this.navCtrl.push(ActivitiesPage)
  }

}
