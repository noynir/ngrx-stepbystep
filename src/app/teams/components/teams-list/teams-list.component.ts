import { Team } from '../../models/team-model';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ArgumentType } from '@angular/core/src/view';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  @Input() teams: Array<Team>;

  constructor() { }

  ngOnInit() {
  }

}
