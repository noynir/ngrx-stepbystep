import * as fromMenu from '../core/reducers/menu';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  menu: fromMenu.State;

}

const initialState = {
  menu: fromMenu.intialState
}

export const reducers: ActionReducerMap<AppState> = {
  menu: fromMenu.reducer
}
