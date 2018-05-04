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

  data:any
  activities: any[] = []
  storeActivities = new Object()

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userSettings: UserSettings) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.data
    console.log("***navParams: ", this.data.email);
    console.log('ionViewDidLoad ActivitiesPage');
  }


  makeActivity(value:{activity:string}){ 
    this.activities.push(value.activity)

    this.storeActivities[this.data.email] = this.activities
    this.userSettings.addID(this.storeActivities)
    this.navCtrl.pop();
  }

  empty(){
    this.activities.length = 0
    this.storeActivities = {}
  }

  ionViewWillEnter(){
    this.empty()
  }

}
