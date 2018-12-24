import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team-model';
import { TeamsDataService } from './teams-data.service';
import { UserModel } from '../../models/user.model';
import * as fromTeams from '../reducers/teams';
import {Store} from '@ngrx/store';
import {TeamSelect, TeamsLoad} from '../actions/actions';
import { withLatestFrom, map } from 'rxjs/operators';

@Injectable()
export class TeamsService {

  get allTeams$(): Observable<Team[]>{
    return this.store.select(fromTeams.selectAll);
  }

  get selectedTeam$(): Observable<Team> {
    return this.store.select(fromTeams.selectSelectedTeam);
  }

  constructor(private store: Store<fromTeams.State>, private dataService: TeamsDataService) { }

  getTeamById(id: number | string){

    this.store.dispatch(new TeamSelect(id));

  }
  getTeams() {

    this.store.dispatch(new TeamsLoad());

  }



}


