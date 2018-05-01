import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import {DataProvider} from "../../providers/data/data";
import { FcmProvider } from "../../providers/fcm/fcm";
import { ToastController } from "ionic-angular";
// import { tap } from "rxjs/operators";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  estWaitTime;
  message;
  constructor(
    public navCtrl: NavController,
    public data:DataProvider,
    public fcm:FcmProvider,
    public toastCtrl:ToastController,
  ) {
    // this.ionViewDidLoad()
  }



  onClick(){
    this.navCtrl.push(UsersPage, {msg:this.message});
  }

  ngOnInit(){
    this.data.getWaitTime().subscribe(res => {
      this.estWaitTime = res;
      if(this.estWaitTime._body === undefined){
        this.message = 'There is no wait time at this moment. ' +
          'Please proceed to Kiosk now';
      } else if(this.estWaitTime._body === 'No technician now'){
        this.message = 'Sorry!! No technicians at this moment.';
      }
      else {
        this.message = this.estWaitTime._body;
      }
    }, error=>{
      console.log(error);
      this.message = 'There is no wait time at this moment. ' +
        'Please proceed to Kiosk now';
    });
  }

  // ionViewDidLoad(){
  //
  //   this.fcm.getToken();
  //   this.fcm.listenNotifications().pipe(
  //     tap(msg =>{
  //       const toast = this.toastCtrl.create({
  //         message: msg.body,
  //         duration: 3000
  //       });
  //       toast.present();
  //     })
  //   ).subscribe(value => console.log(value),
  //       error => console.log(error))
  //
  // }



}
