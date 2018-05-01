import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Firebase } from "@ionic-native/firebase";
import { Platform } from "ionic-angular";
import { AngularFirestore } from "angularfire2/firestore";


@Injectable()
export class FcmProvider {

  constructor(
    public http: Http,
    public fb : Firebase,
    public platform : Platform,
    public afs : AngularFirestore
    ) { }

  // async getToken() {
  //
  //   let token;
  //
  //   if (this.platform.is('android')) {
  //     token = await this.fb.getToken();
  //   }
  //
  //   if (this.platform.is('ios')) {
  //     token = await this.fb.getToken();
  //     await this.fb.grantPermission();
  //   }
  //
  //   return this.saveTokenToFireStore(token)
  // }
  //
  // saveTokenToFireStore(token){
  //   if(!token) return;
  //
  //   const deviceRef = this.afs.collection('devices');
  //
  //   const docData ={
  //     token,
  //     userId: 'testUser'
  //   };
  //
  //   return deviceRef.doc(token).set(docData);
  //
  // }
  //
  // listenNotifications(){
  //   return this.fb.onNotificationOpen();
  // }


}
