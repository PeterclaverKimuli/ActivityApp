import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ActivitiesPage} from '../activities/activities'

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data
    console.log("***navParams: ", this.user)
  }

  ionViewDidLoad() {
    this.user = this.navParams.data
    console.log('ionViewDidLoad HomePage')
  }

  makeNewActivities(){
    this.navCtrl.push(ActivitiesPage)
  }

}
