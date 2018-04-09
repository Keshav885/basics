import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketorPage } from './ticketor';

@NgModule({
  declarations: [
    TicketorPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketorPage),
  ],
})
export class TicketorPageModule {}
