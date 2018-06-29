import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TeamsDataService} from '../services/teams-data.service';
import {TeamsActionsTypes, TeamsLoadComplete} from '../actions/actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class TeamsEffects{

  constructor(private  actions$: Actions, private dataService: TeamsDataService  ){}

  @Effect()
  loadTeams$: Observable<Action> = this.actions$
    .pipe(
      ofType(TeamsActionsTypes.TeamsLoad),
      switchMap(() =>  this.dataService.getTeamsData()),
      map(data =>  new TeamsLoadComplete(data))
    )

}
