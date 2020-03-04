import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemsDataService {
  items: any;
  mockedData: any = {
      title: 'Some mocked data',
      text: 'Its just mocked text, in case if its just first load',
      isDone: false,
      id: 'Somemockeddata',
      isTimerInProgress: false,
      whenWasStarted: '',
      valueOnPause: ''
    };

  constructor() { }

  getItems(): any {
    // todo: need to be impl as observable
    if(localStorage.length > 0 ) {
      this.getDataFromLocalStorage();
    } else {
      this.setNewItem2LocalStorage(this.mockedData);
      this.getDataFromLocalStorage();
    }

    return this.items;
  }

  setNewItem2LocalStorage(newItem, isNotNew?:boolean): void {
    debugger;
    !this.items ? this.items = [] : console.log();
    !isNotNew ? this.items.unshift(newItem) : console.log();
    localStorage.setItem(newItem.id, JSON.stringify(newItem));
  }

  getDataFromLocalStorage(): any {
    let tempItems: any = [];
    let keys = Object.keys(localStorage);
    for(let key of keys) {
      // todo: should be impl checking of raw data equal to type which we expect
      tempItems.push(JSON.parse(localStorage.getItem(key)));
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }

    this.items = tempItems;
  }
}
