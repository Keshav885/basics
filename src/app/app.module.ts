import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from "@angular/http";
import { BrMaskerModule } from 'brmasker-ionic-3';
import { TextMaskModule } from 'angular2-text-mask';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from "angularfire2/firestore";
import { Firebase } from "@ionic-native/firebase";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import {BannerPage} from '../pages/banner/banner';
import {FormsModule} from '@angular/forms';
import {TicketorPage} from '../pages/ticketor/ticketor';
import {SuccessPage} from '../pages/success/success';

//Providers or Services//
import {MinutesPipe} from "../pipes/minutes/minutes";
import { DataProvider } from '../providers/data/data';
import { FcmProvider } from '../providers/fcm/fcm';

export const firebaseConfig = {
  apiKey: "AIzaSyAcw6WDt1UKxydWT0sob-CGaooFy47djss",
  authDomain: "askitnow-e3249.firebaseapp.com",
  databaseURL: "https://askitnow-e3249.firebaseio.com",
  projectId: "askitnow-e3249",
  storageBucket: "askitnow-e3249.appspot.com",
  messagingSenderId: "117280746490"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BannerPage,
    UsersPage,
    TicketorPage,
    SuccessPage,
    MinutesPipe,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    BrMaskerModule,
    TextMaskModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    BannerPage,
    TicketorPage,
    SuccessPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    DataProvider,
    FcmProvider,
    Firebase,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
