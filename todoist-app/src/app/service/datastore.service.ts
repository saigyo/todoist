import { Injectable } from '@angular/core';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "../model/todoitem";

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:8080',
  models: {
    posts: TodoItem,
  }
}

@Injectable({
  providedIn: 'root'
})
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: HttpClient) {
    super(http);
  }
}
