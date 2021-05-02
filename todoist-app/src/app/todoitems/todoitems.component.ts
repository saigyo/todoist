import { Component, OnInit } from '@angular/core';
import {TodoitemService} from '../service/todoitem.service';
import {TodoItem} from '../model/todoitem';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  faTrash = faTrashAlt;

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

  addNewItem(): void {
    this.todoItemService.createNewItem().subscribe(newItem => {
      this.todoItems.push(newItem);
      this.selectedItem = newItem;
    });
  }

  delete(item: TodoItem): void {
    this.todoItemService.delete(item.id).subscribe(() => {
      if (this.selectedItem === item) {
        this.selectedItem = null;
      }
      this.todoItems.splice(this.todoItems.indexOf(item), 1);
    });
  }
}
