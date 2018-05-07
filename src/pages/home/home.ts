import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ActivitiesPage} from '../activities/activities'
import {UserSettings} from '../../shared/shared'

@IonicPage({
  // name: 'home',
  // segment: 'user/:id'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  user: any
  activities: any[] = []
  id:any[] = []

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userSettings:UserSettings) {
    this.user = this.navParams.data
  }
  
  inArray(target, array){
    for(var i = 0; i<array.length; i++){
        if(array[i].hasOwnProperty(target)){
            return true
        }
    } 
    return false;
  }

 arrayInArray(target, array){
  for(var i = 0; i<array.length; i++){
      if(array[i] === target){
          return true
      }
  } 
  return false
 }

  ionViewWillEnter(){
    this.id = this.userSettings.getID()
    if(this.inArray(this.user.email, this.id)===true){
      for(let i in this.id){
        if(this.arrayInArray(this.id[i][this.user.email], this.activities)===true || !this.id[i].hasOwnProperty(this.user.email)){
          continue
        }
        else{ 
          this.activities.push(this.id[i][this.user.email])      
        }
      }
    }
  }

  makeNewActivities($event){
    let item = {email:this.user.email}
    this.navCtrl.push(ActivitiesPage, item);
  }

}
