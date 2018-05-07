import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ActivitiesPage } from '../pages/activities/activities';
import {UserSettings} from '../shared/shared'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  loggedInUser:{email:string}

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private userSettings: UserSettings) {
    this.initializeApp();

    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide()
    });
  }

  goToActivities(){
  }

  makeNewActivities($event){
    this.loggedInUser = this.userSettings.getLoggedUser()
    this.nav.push(ActivitiesPage, this.loggedInUser)
  }

  logout(){
    setTimeout(() => this.nav.popToRoot(), 1000);  
  }
}
