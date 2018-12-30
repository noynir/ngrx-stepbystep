import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team-model';
import { TeamsDataService } from './teams-data.service';
import { TemplateAst } from '@angular/compiler';
import { UserModel } from '../../models/user.model';

@Injectable()
export class TeamsService {

  constructor(private dataService: TeamsDataService) { }

  getTeamById(id: number | string): Observable<Team> {

    return this.dataService.getTeamById(id);

  }
  getTeams(page: number = 1, pageSize: number = 10): Observable<Array<Team>> {

    return this.dataService.getTeamsData(page, pageSize);

  }

  getTeamMembers(teamId: number): Observable<Array<UserModel>>  {
    return this.dataService.getTeamUsersData(teamId);
  }

}


