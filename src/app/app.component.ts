import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from './core/reducers/layout';
import * as fromLayoutActions from './core/actions/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  sideNavOpen = true;

  constructor(private store: Store<fromLayout.State>) { }
  sideNavToggled() {
    this.sideNavOpen = !this.sideNavOpen;
    if (this.sideNavOpen) {
      this.store.dispatch(new fromLayoutActions.OpenSidenav());
    } else {
      this.store.dispatch(new fromLayoutActions.CloseSidenav());
    }
  }

}
