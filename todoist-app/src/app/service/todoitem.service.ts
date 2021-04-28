import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoItem} from "../model/todoitem";
import {Datastore} from "./datastore.service";
import {map} from "rxjs/operators";
import {JsonApiQueryData} from "angular2-jsonapi";

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {

  constructor(private datastore : Datastore) {
  }

  public findAll(): Observable<TodoItem[]> {
    return this.datastore
      .findAll(TodoItem)
      .pipe(map((data: JsonApiQueryData<TodoItem>) => data.getModels()))
  }
}
