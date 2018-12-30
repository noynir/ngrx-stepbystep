import {createEntityAdapter, EntityState} from '@ngrx/entity';
import * as fromRoot from '../../reducers';
import {Team} from '../models/team-model';
import {TeamsActions, TeamsActionsTypes} from '../actions/actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface TeamsState extends EntityState<Team>{
  selectedTeamId: number;
}
export interface State extends fromRoot.AppState {
  currentTeams: TeamsState;
}

export const adapter = createEntityAdapter<Team>({
  selectId: team => team.id,
  sortComparer: false
});

export const initialState: TeamsState = adapter.getInitialState({
  selectedTeamId: 0
});


export function reducer( state: TeamsState = initialState, action: TeamsActions){

  switch (action.type){
    case TeamsActionsTypes.TeamsLoadComplete:
      return Object.assign({}, state, adapter.addMany(action.payload, initialState) );
    case TeamsActionsTypes.TeamSelect:
      return Object.assign({}, state, { selectedTeamId: action.payload} );
    default:
      return state;
  }
}

export const reducers = {
  currentTeams: reducer
};

export const selectTeamsState = createFeatureSelector<State>('teams');
export const selectCurrentTeams = createSelector(selectTeamsState, state => state.currentTeams);
export const selectSelectedTeamId = createSelector(selectCurrentTeams, state => state.selectedTeamId);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectCurrentTeams);

// export const selectSelectedTeam =  createSelector(selectEntities, selectSelectedTeamId , (entities,teamId) => {
//  return teamId && entities[teamId];
// });

export const selectSelectedTeam =  createSelector( 
  fromRoot.getRouterParams,
  selectEntities,
  (routeParams, teams) => routeParams && teams[routeParams.get('id')] 
)


