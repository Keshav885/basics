import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ticketor',
  templateUrl: 'ticketor.html',
})
export class TicketorPage {

  userDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.userDetails = this.navParams.data.details ;
    console.log(this.userDetails);
  }

  user = {
    category: '',
    comment: ''
  };

  logForm(form) {
    console.log(form.value)
  }

}
