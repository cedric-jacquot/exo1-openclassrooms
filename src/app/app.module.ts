import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItem1Component } from './post-list/post-list-item1/post-list-item1.component';
import { PostListItem2Component } from './post-list/post-list-item2/post-list-item2.component';
import { PostListItem3Component } from './post-list/post-list-item3/post-list-item3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PostListComponent, PostListItem1Component, PostListItem2Component, PostListItem3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
