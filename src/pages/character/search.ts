import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { api } from  '../../services/api'
import { CharacterProfile } from  "./profile"
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  characters = [];
  currentPage = 0;
  totalPages = 0;
  itemCountLimit = 20;

  constructor(public navCtrl: NavController, private api:api, public navParams:NavParams) {
  	this.searchText()
    
  }

  ionViewWillEnter() {
  	
  }

  goToUserProfile(character) {
    this.navCtrl.push(CharacterProfile,{character:character})
  }

  searchText(text?:string, page?:number){
    let params = {limit:this.itemCountLimit} as any
    if(text && text.length>0)
      params.nameStartsWith = text


    if(page!=undefined && page > 0 && page <= this.totalPages)
    {
      params.offset = (page-1)*this.itemCountLimit
    }

    this.api.getCharacters(params)
    .then(results=>{
      this.totalPages = Math.ceil(results.data.total / this.itemCountLimit)
      this.currentPage = 1 +  Math.floor(results.data.offset / this.itemCountLimit)

      this.characters = results.data.results

      if(this.totalPages==0)
        this.currentPage = 0;

    })
    
  }

}
