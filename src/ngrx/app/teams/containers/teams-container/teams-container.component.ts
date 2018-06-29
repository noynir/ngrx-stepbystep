import { TeamsService } from '../../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams-container',
  templateUrl: './teams-container.component.html',
  styleUrls: ['./teams-container.component.scss']
})
export class TeamsContainerComponent implements OnInit {

  teams$: Observable<Array<Team>>;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teams$  = this.teamsService.allTeams$;

    this.teamsService.getTeams();
  }

}
