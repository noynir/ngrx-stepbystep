import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSearchCompleteComponent } from './user-search-complete/user-search-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserSearchCompleteComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
