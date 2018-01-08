import {Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers/';
import {Observable} from 'rxjs/Observable';
import {ToggleSidenav} from './core/actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  sideNavOpen$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) {
  }

  ngOnInit(){
    this.sideNavOpen$ = this.store.select(fromRoot.getLayoutShowSidenav);
  }


  sideNavToggle() {
      this.store.dispatch(new ToggleSidenav());

  }

}
