import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TicketorPage} from '../ticketor/ticketor';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  userInfo = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };

  onSubmit(form) {
    this.navCtrl.push(TicketorPage, {details: this.userInfo});
    // form.reset();
  }

  onBack(){
    this.navCtrl.pop();
  }



}

