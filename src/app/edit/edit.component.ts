import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  title = '';
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.text.trim() && this.title.trim()) {
      const item: any = {
        title: this.title,
        text: this.text,
        isDone: false
      };
      this.onAdd.emit(item);

      this.title = this.text = '';
    }
  }
}
