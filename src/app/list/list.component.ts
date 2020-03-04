import {Component, Input, OnInit} from '@angular/core';
import { ItemsDataService } from '../items-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  timer: number = 0;
  timerRef: any;

  @Input() item: any;

  constructor(private itemsDataService: ItemsDataService){}

  ngOnInit(): void {
    this.timer = this.item.valueOnPause || 0;
    this.item.isTimerInProgress ? this.onStart() : console.log();
  }

  onStart(): void {
    let newDate = Date.now();
    if(this.item.whenWasStarted == '') {
      this.item.whenWasStarted = newDate;
      this.item.isTimerInProgress = true;
    }
    this.itemsDataService.setNewItem2LocalStorage(this.item, true);
    const startTime = this.item.whenWasStarted - (this.timer || 0);
    this.timerRef = setInterval(() => {
      this.timer = Math.round((Date.now() - startTime)/1000);
    }, 1000);
  }

  onPause(): void {
    clearInterval(this.timerRef);

    this.item.whenWasStarted = '';
    this.item.isTimerInProgress = false;
    this.item.valueOnPause = this.timer;
    this.itemsDataService.setNewItem2LocalStorage(this.item, true);
  }

  onClear(): void {
    clearInterval(this.timerRef);
    this.timer = 0;
    this.item.whenWasStarted = '';
    this.item.isTimerInProgress = false;
    this.item.valueOnPause = this.timer;
    this.itemsDataService.setNewItem2LocalStorage(this.item, true);

  }

  //todo: need to be impl continue method
  //todo: need to be impl edit method
}
