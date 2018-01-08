import { LayoutActions, LayoutActionTypes } from '../actions/layout';
import {createFeatureSelector} from '@ngrx/store';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: true
};

export function reducer (state: State = initialState, action: LayoutActions  ) {
  switch ( action.type ) {
    case LayoutActionTypes.ToogleSidenav:
      return Object.assign({}, state,{ showSidenav: !state.showSidenav});
    default:
      return state;
  }
}

export const getShowSideNav = (state: State) => {
  console.log(state);
  return state.showSidenav;
}
