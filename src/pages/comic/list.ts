import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { api } from  '../../services/api'
import { ComicDetailPage } from "./detail"
@Component({
  selector: 'comic-list',
  templateUrl: 'list.html'
})
export class ComicListPage {
  comics = [];
  currentPage = 0;
  totalPages = 0;
  itemCountLimit = 20;

  character

  constructor(public navCtrl: NavController,  private alertCtrl:AlertController, private loadingCtrl: LoadingController, private api:api, public navParams:NavParams) {
    this.character = this.navParams.get("character")
    this.searchText()
  }

  ionViewWillEnter() {
    this.character = this.navParams.get("character") || this.character;
  }

  goToComicProfile(comic) {
    this.navCtrl.push(ComicDetailPage,{comic:comic})
  }

  searchText(text?:string, page?:number){
    let params = {limit:this.itemCountLimit} as any
    if(text && text.length>0)
      params.nameStartsWith = text


    if(page!=undefined && page > 0 && page <= this.totalPages)
    {
      params.offset = (page-1)*this.itemCountLimit
    }

    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loading.present();

    this.api.getComics(this.character.id,params)
    .then(results=>{
      this.totalPages = Math.ceil(results.data.total / this.itemCountLimit)
      this.currentPage = 1 +  Math.floor(results.data.offset / this.itemCountLimit)

      this.comics = results.data.results

      if(this.totalPages==0)
        this.currentPage = 0;

      loading.dismiss()

      if(this.comics.length==0)
        this.alertCtrl.create({title:'No Results', message:'No comics found', enableBackdropDismiss:true}).present()

    }).catch(err=>{
       loading.dismiss()
    })
    
  }

}

