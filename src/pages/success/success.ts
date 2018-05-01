import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage implements OnInit{
  ticket_details;
  myDate;
  newTime;
  wait_time;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public data: DataProvider,
              public alertCtrl: AlertController,

  ) {
    this.ticket_details= this.navParams.data.wait_results;
    this.wait_time = Number(this.navParams.data.wait_results.wait_time);
  }

  ngOnInit(){
    this.myDate = new Date();
    this.newTime = new Date();
    this.newTime.setTime(this.myDate.getTime() +( Number(this.wait_time) * 60000));

    setInterval(()=>{
      if(this.wait_time >0){
        this.wait_time-=1;
      }
    }, 60000)
  }

  onCancel(){
    const alert = this.alertCtrl.create({
      title: 'Are you sure ?',
      message: 'Please press Remove to delete your ticket',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            let data = { ticket_id: this.ticket_details.ticket_id };
            this.data.clearTicket(data)
              .subscribe(res => {
                const alert = this.alertCtrl.create({
                  title: 'Success !!',
                  message: 'Your ticket was successfully removed',
                  buttons: ['Ok']
                });
                alert.onDidDismiss(()=>{this.navCtrl.popToRoot();});
                alert.present();

              },error => {
                const alert = this.alertCtrl.create({
                  title: 'Ticket Cancelling Failed',
                  subTitle: error.message,
                  buttons: ['Ok']
                });
                alert.present();
              });
          }
        }
      ]
    });
    alert.present();
  }

}
