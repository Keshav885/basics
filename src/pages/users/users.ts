import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TicketorPage} from '../ticketor/ticketor';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage implements OnInit{

  constructor(public navCtrl: NavController,
              public data : DataProvider,
              private params : NavParams
              ) {
  }

  userInfo = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    wait_time: this.params.data.msg
  };

  pattern ='^(\\([0-9]{3}\\)\\s?|[0-9]{3}-)[0-9]{3}-[0-9]{4}';

  onSubmit(form) {
    this.navCtrl.push(TicketorPage, {details: this.userInfo});
    // form.reset();
  }

  onBack(){
    this.navCtrl.pop();
  }


  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = true;
  }

  ionViewDidLeave(){
    this.navCtrl.swipeBackEnabled = false;
  }

  ngOnInit(){
   this.ionViewWillEnter();
   this.ionViewDidLeave();
  }

}

