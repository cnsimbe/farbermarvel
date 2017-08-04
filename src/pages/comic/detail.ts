import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'comic-detail',
  templateUrl: 'detail.html'
})
export class ComicDetailPage {
  comic;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	this.comic = this.navParams.get("comic");
  }

  ionViewWillEnter() {
  	this.comic = this.navParams.get("comic") || this.comic
  }

}
