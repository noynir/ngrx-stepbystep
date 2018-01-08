import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {TeamsDataService} from '../services/teams-data.service';
import {TeamsActionsTypes, TeamsLoadComplete} from '../actions/actions';

@Injectable()
export class TeamsEffects{

  constructor(private  actions$: Actions, private dataService: TeamsDataService  ){}

  @Effect()
  loadTeams$: Observable<Action> = this.actions$
    .ofType(TeamsActionsTypes.TeamsLoad)
    .switchMap(() =>  this.dataService.getTeamsData())
    .map(data =>  new TeamsLoadComplete(data));

}
