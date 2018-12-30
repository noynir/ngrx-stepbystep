import {Action} from '@ngrx/store';
import {Team} from '../models/team-model';

export enum TeamsActionsTypes {
  TeamsLoad  = '[Teams] Load Teams',
  TeamsLoadComplete = '[Teams] LoadComplete',
  TeamSelect = '[Teams] Team Select'
};


export class TeamsLoad implements Action {
  readonly  type: string = TeamsActionsTypes.TeamsLoad;
  constructor(public payload?){}
}

export class TeamsLoadComplete implements Action {
  readonly  type: string = TeamsActionsTypes.TeamsLoadComplete;
  constructor(public payload: Team[]){}
}
export class TeamSelect implements Action {
  readonly  type: string = TeamsActionsTypes.TeamSelect;
  constructor(public payload: number | string){}
}

export type TeamsActions = TeamsLoad | TeamsLoadComplete | TeamSelect;
