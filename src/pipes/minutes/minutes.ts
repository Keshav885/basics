import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes',
})
export class MinutesPipe implements PipeTransform {

  transform(value) {

    if( value <= 0){
      return 'Please proceed to the kiosk.';
    }
    else if(value >= 1  && value <= 10) {
      return 'Wait time is upto 10 min';
    }

    else if(value > 10  && value <= 15) {
      return 'Current wait time is around 10 - 15 min';
    }

    else if(value > 15  && value <= 20) {
      return 'Current wait time is around 15 - 20 min';
    }

    else if(value > 20  && value <= 25) {
      return 'Current wait time is around 20 - 25 min';
    }

    else if(value > 25  && value <= 30) {
      return 'Current wait time is around 25 - 30 min';
    }

    else if(value > 30  && value <= 40) {
      return 'Current wait time is around 30 - 40 min';
    }
    else if(value > 40  && value <= 50) {
      return 'Current wait time is around 40 - 50 min';
    }
    else if(value > 50  && value <= 60) {
      return 'Current wait time is around 50 - 60 min';
    }
    else{
      let  temp = value * 60;
      const hours = Math.floor((temp/3600));
      const minutes: number = Math.floor((temp/ 60)/60);
      if(minutes <= 15) {
        return hours + 'hr ' + '15m';
      } else if(minutes <= 30) {
        return hours + 'hr ' + '30m';
      }else if(minutes <= 45) {
        return hours + 'hr ' + '45m';
      }
      else {
        return hours + 'hr ';
      }
    }
  }
}
