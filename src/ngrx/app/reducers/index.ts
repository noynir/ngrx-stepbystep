import * as fromLayout from '../core/reducers/layout';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
  layout: fromLayout.State;

}

const initialState = {
  layout: fromLayout.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  layout: fromLayout.reducer
}

export const getLayout = createFeatureSelector<fromLayout.State>('layout');
export const getLayoutShowSidenav = createSelector(getLayout, fromLayout.getShowSideNav);
