import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/home/landing';

import { CharacterProfile } from  "../pages/character/profile"
import { SearchPage } from  "../pages/character/search"

import { ComicDetailPage } from  "../pages/comic/detail"
import { ComicListPage } from  "../pages/comic/list"

import  { data } from '../services/data'
import { HttpModule } from "@angular/http";
import  { api } from '../services/api'
import { Device } from '@ionic-native/device';
import  {  imgPerm } from "../services/pipes"

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    HomePage,
    LandingPage,

    CharacterProfile,
    SearchPage,

    ComicDetailPage,
    ComicListPage,

    imgPerm,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    HomePage,
    LandingPage,

    CharacterProfile,
    SearchPage,

    ComicDetailPage,
    ComicListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    data,
    api,
    imgPerm,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
