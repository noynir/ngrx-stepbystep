import {Action} from '@ngrx/store';

export enum MenuActionTypes {
  ExpandTeams = '[Menu] Expand Teams',
  CollapseTeams = '[Menu] Collapse Teams'
}

export class ExpandTeams implements Action {
  readonly type = MenuActionTypes.ExpandTeams;
}

export class CollapseTeams implements Action {
  readonly type = MenuActionTypes.CollapseTeams;
}

export type MenuActions = ExpandTeams | CollapseTeams;
