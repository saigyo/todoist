import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ItemState, TodoItem} from '../model/todoitem';
import {Datastore} from './datastore.service';
import {map} from 'rxjs/operators';
import {JsonApiQueryData} from 'angular2-jsonapi';

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {

  constructor(private datastore: Datastore) {
  }

  public findAll(): Observable<TodoItem[]> {
    return this.datastore
      .findAll(TodoItem)
      .pipe(map((data: JsonApiQueryData<TodoItem>) => data.getModels()));
  }

  public createNewItem(): Observable<TodoItem> {
    return this.datastore.createRecord(TodoItem, { state: ItemState.todo }).save();
  }

  delete(id: string): Observable<object> {
    return this.datastore.deleteRecord(TodoItem, id);
  }
}
