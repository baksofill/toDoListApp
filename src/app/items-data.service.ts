import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ItemsDataService {
  items: any = [
    {title: 'item 1', text: 'some text1', isDone: true, id: 1},
    {title: 'item 2', text: 'some text2', isDone: true, id: 2},
    {title: 'item 3', text: 'some text3', isDone: true, id: 3}
  ];

  constructor() { }

  getItems(): any {
    return this.items;
  }

  addNewItem(item): any {
    this.items.unshift(item);
    console.log('----->', this.items);
  }
}
