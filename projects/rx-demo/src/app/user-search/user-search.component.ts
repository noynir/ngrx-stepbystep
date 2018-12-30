import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {


  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }

  searchUsers(text){
    const url = `https://jsonplaceholder.typicode.com/users?q=${text}`
    return this.http.get(url);
  }

}
