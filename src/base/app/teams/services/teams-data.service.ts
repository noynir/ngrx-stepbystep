import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Team } from '../models/team-model';
import { UserModel } from '../../models/user.model';

@Injectable()
export class TeamsDataService {

  private readonly url = `${environment.API_base_url}/teams`;

  constructor(private httpClient: HttpClient) { }

  getTeamById(id: number | string): Observable<Team>{
      return this.httpClient.get<Team>(`${this.url}/${id}`);
  }

  getTeamsData(page: number = 1, pageSize: number = 10): Observable<Array<Team>> {

    return this.httpClient.get<Array<Team>>(this.url);
  }

  getTeamUsersData(teamId: number): Observable<Array<UserModel>> {

    const url = `${this.url}/${teamId}/users`;
    return this.httpClient.get<Array<UserModel>>(this.url);
  }

}
