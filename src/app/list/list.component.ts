import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  timer: string = '00:00';
  sec: string = '00';
  min: string = '00';

  @Input() item: any;

  ngOnInit(): void {
    this.item.isTimerInProgress ? this.calcInitialValue(this.item.whenWasStarted) : console.log();
  }

  onStart(): void {
    let newDate = new Date();
    this.item.whenWasStarted = newDate;
    console.log('------> Timer is Stared');
    this.timer = '00:99'; // =)
    //todo: impl working timer

    // let sec = Number(this.sec);
    // let min = Number(this.min);
    //
    // let timer = setInterval(function() {
    //   debugger;
    //   if (sec < 10) {
    //     this.sec = "0" + sec++;
    //   }
    //   else {
    //     this.sec = '00';
    //   }
    //   // if (min >= 59 && sec >=59 ) {
    //   //   this.stopTimeSec(timer);
    //   //   return true;
    //   // }
    //   // if (sec > 59) {
    //   //   sec = 0;
    //   //   min++;
    //   // }
    //   // if (min > 59) {
    //   //   min = 0;
    //   // }
    // }, 1000);
  }

  // stopTimerSec(timer) {
  //   if (timer) {
  //     clearInterval(timer);
  //     return timer;
  //   }
  //   else return timer;
  // }

  onPause(): void {
    console.log('----> Timer on Pause');
    //stopTimerSec(timer);
  }

  onClear(): void {
    this.timer = '00:00';
    console.log('----> Timer on Cleared');
  }

  calcInitialValue(whenWasStarted?): void {
    //todo: calc initial value of timer
    this.timer = 'reculc value';
    this.onStart();
  }

  //todo: need to be impl edit method
}
