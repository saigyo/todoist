import {Component, Input, OnInit} from '@angular/core';
import {ItemState, ItemState2LabelMapping, TodoItem} from "../model/todoitem";

@Component({
  selector: 'app-todoitem-detail',
  templateUrl: './todoitem-detail.component.html',
  styleUrls: ['./todoitem-detail.component.css']
})
export class TodoitemDetailComponent implements OnInit {
  @Input() todoItem? : TodoItem

  public itemState2LabelMapping = ItemState2LabelMapping;
  public itemStates = Object.values(ItemState)

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.todoItem.save().subscribe()
  }
}
