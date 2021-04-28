import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { TodoitemService } from "./service/todoitem.service";
import {HttpClientModule} from "@angular/common/http";
import {JsonApiModule} from "angular2-jsonapi";

@NgModule({
  declarations: [
    AppComponent,
    TodoitemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonApiModule
  ],
  providers: [TodoitemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
