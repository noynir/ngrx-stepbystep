import { Team } from '../../models/team-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.scss']
})
export class TeamListItemComponent implements OnInit {

  @Input()
  team: Team;

  constructor() { }

  ngOnInit() {
  }

}
