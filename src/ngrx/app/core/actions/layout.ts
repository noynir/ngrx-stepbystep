import {Action} from '@ngrx/store';

export enum LayoutActionTypes {
  ToogleSidenav = '[Layout] Toggle Sidenav'
}

export class ToggleSidenav implements Action {
  readonly type = LayoutActionTypes.ToogleSidenav;
}


export type LayoutActions = ToggleSidenav;
