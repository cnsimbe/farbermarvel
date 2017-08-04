import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { data } from  '../../services/data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public data:data) {

  }

}
