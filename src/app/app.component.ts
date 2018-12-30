import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  sideNavOpen = true;

  constructor() { }

  sideNavToggle() {
    this.sideNavOpen = !this.sideNavOpen;

  }

}
