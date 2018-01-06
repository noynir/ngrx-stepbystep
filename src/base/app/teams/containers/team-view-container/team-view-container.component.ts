import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {Observable} from 'rxjs/Observable';
import {Team} from '../../models/team-model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-view-container',
  templateUrl: './team-view-container.component.html',
  styleUrls: ['./team-view-container.component.scss']
})
export class TeamViewContainerComponent implements OnInit {

  currentTeam$ : Observable<Team>;

  constructor(private route: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit() {


    this.currentTeam$ = this.route.paramMap
      .map(params => params && params.get('id'))
      .switchMap( (teamId: string) => this.teamsService.getTeamById(teamId));
  }

}
