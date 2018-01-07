import {Component, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMenu from './core/reducers/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<fromMenu.State>) { }



}
