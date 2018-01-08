import * as fromLayout from '../core/reducers/layout';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  layout: fromLayout.State;

}

const initialState = {
  layout: fromLayout.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  layout: fromLayout.reducer
}
