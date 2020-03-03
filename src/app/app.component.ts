import { Component } from '@angular/core';
import { ItemsDataService } from './items-data.service';

export interface Item {
  title: string;
  text: string;
  idDone: boolean;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'my-todo-list';
  items: Item[];

  constructor(private itemsDataService: ItemsDataService) {
    this.items = this.itemsDataService.getItems();
    console.log(this.items);
  }

  updateItems(item: Item) {
    this.itemsDataService.setNewItem2LocalStorage(item);
  }

}
