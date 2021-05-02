import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../service/todoitem.service';
import {TodoItem} from '../model/todoitem';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  todoItems: TodoItem[];

  selectedItem: TodoItem;

  constructor(
    private todoItemService: TodoitemService
  ) { }

  ngOnInit(): void {
    this.todoItemService.findAll().subscribe(data => {
        this.todoItems = data;
      }
    );
  }

  onSelect(todoItem: TodoItem): void {
    this.selectedItem = todoItem;
  }
}
