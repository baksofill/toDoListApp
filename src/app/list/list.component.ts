import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  timer: string = '00:10';
  sec: string = '00';
  min: string = '00';


  @Input() item: any;

  ngOnInit(): void {}

  onStart(): void {
    let newDate = new Date();
    console.log('---->', newDate);

    let sec = Number(this.sec);
    let min = Number(this.min);

    let timer = setInterval(function() {
      debugger;
      if (sec < 10) {
        this.sec = "0" + sec++;
      }
      else {
        this.sec = '00';
      }
      // if (min >= 59 && sec >=59 ) {
      //   this.stopTimeSec(timer);
      //   return true;
      // }
      // if (sec > 59) {
      //   sec = 0;
      //   min++;
      // }
      // if (min > 59) {
      //   min = 0;
      // }
    }, 1000);
  }

  stopTimeSec(timer) {
    debugger;
    if (timer) {
      clearInterval(timer);
      return timer;
    }
    else return timer;
  }

  onPause(): void {
    console.log('----> just Pause now');
  }
  onClear(): void {
    this.min = '00';
    this.sec = '00';
    console.log('----> cleaning of timer');
  }

}
