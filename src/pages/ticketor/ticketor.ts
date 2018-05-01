import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SuccessPage} from '../success/success';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-ticketor',
  templateUrl: 'ticketor.html',
})
export class TicketorPage {

  userDetails;
  categories;
  results;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private data: DataProvider,
              public lodingCtrl: LoadingController,
              public alertCtrl: AlertController,
  ) {

    //Retrieving user personal information
    this.userDetails = this.navParams.data.details ;

    //Retrieving issue categories from server
    this.showCategories();
  }

  user = {
    category_id: '',
    questions: ''
  };

  showCategories(){
    const loader = this.lodingCtrl.create({
      content: 'Gathering Data'
    });
    loader.present();
    this.data.getCategories().subscribe(res =>{
      this.categories = res;
      loader.dismiss()
    }, error=>{const alert = this.alertCtrl.create({
      title: 'Server is busy',
      subTitle: error.message,
      buttons: ['Ok']
    });
      alert.present();
    })
  }

  logForm(form) {
    this.userDetails['category_id'] = form.value.category_id;
    this.userDetails['questions'] = form.value.questions;
    if(form.form.valid){
      const loader = this.lodingCtrl.create({
          content: 'Submitting your ticket'
      });
      loader.present();
      this.data.createTicket(this.userDetails).subscribe(res => {
        this.results = res;
        this.navCtrl.push(SuccessPage, {'wait_results': this.results});
        loader.dismiss()
      }, error => {
        loader.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Ticket creation failed',
          subTitle: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
     }
  }

  onEdit(){
    this.navCtrl.pop();
  }
}
