import * as fromLayout from '../core/reducers/layout';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import { routerReducer, RouterReducerState} from '@ngrx/router-store'
import { RouterStateUrl } from '../custom-router-serializer';


export interface AppState {
  layout: fromLayout.State;
  router: RouterReducerState
}

const initialState = {
  layout: fromLayout.initialState,
  router: null
}

export const reducers: ActionReducerMap<AppState> = {
  layout: fromLayout.reducer,
  router: routerReducer
}

export const getLayout = createFeatureSelector<fromLayout.State>('layout');
export const getLayoutShowSidenav = createSelector(getLayout, fromLayout.getShowSideNav);

export const getRouter = createFeatureSelector<RouterStateUrl>('router');
export const getRouterParams = createSelector(
  getRouter,
  (router) =>  router && router.params
)
