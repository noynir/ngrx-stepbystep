import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';


@Component({
  selector: 'app-sidenav-toggle',
  templateUrl: './sidenav-toggle.component.html',
  styleUrls: ['./sidenav-toggle.component.scss']
})
export class SidenavToggleComponent implements OnInit {

  @Input() toggle: boolean;

  @Output() toggled = new EventEmitter<boolean>();

  get sideNavToogle(){
    return this.toggle ? 'chevron_left' : 'chevron_right';
  }


  constructor() { }

  ngOnInit() {
  }

  toggleButtonChange(event: MatButtonToggleChange) {
    // console.log(event);
    // console.log(event.source.checked);
    this.toggled.emit(!this.toggle);
  }

}
