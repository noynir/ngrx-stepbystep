import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {Observable} from 'rxjs';
import {Team} from '../../models/team-model';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';

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
      .pipe(
        map(params => params && params.get('id')),
        tap( (teamId: string) => this.teamsService.getTeamById(teamId)),
        switchMap( () =>  this.teamsService.selectedTeam$)
      )

  }

}
