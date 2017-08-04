import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { data } from  '../../services/data';
import { HomePage } from "./home"

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  constructor(public navCtrl: NavController, public data:data) {
  }
 
  goToHome() {
  	this.navCtrl.setRoot(HomePage,null,{animate:true})
  }

}
