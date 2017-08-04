import { Component }  from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicListPage } from "../comic/list"

@Component({
  selector: 'character-profile',
  templateUrl: 'profile.html'
})
export class CharacterProfile {
  character;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	this.character = this.navParams.get("character")
  }

  ionViewWillEnter() {

    this.character = this.navParams.get("character") || this.character
  }

  goToComicList(session) {
  	this.navCtrl.push(ComicListPage,{character:this.character})
  }

}
