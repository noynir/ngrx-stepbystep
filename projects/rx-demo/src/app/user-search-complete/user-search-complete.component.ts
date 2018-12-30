import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-search-complete',
  templateUrl: './user-search-complete.component.html',
  styleUrls: ['./user-search-complete.component.scss']
})
export class UserSearchCompleteComponent implements OnInit {

  results$: Observable<any>;
  searchTerm$ = new Subject<any>();

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.results$=this.searchTerm$.pipe(
      map( (e) =>  e.target.value ),
      filter(text => text.length > 1),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap((text) => this.searchUsers(text))
    );
  }

  searchUsers(text){
    const url = `https://jsonplaceholder.typicode.com/users?q=${text}`
    return this.http.get(url);
  }


}
