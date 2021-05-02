import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { TodoitemService } from './service/todoitem.service';
import { TodoitemDetailComponent } from './todoitem-detail/todoitem-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonApiModule} from 'angular2-jsonapi';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoitemsComponent,
    TodoitemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonApiModule,
    FormsModule
  ],
  providers: [TodoitemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
