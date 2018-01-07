import {MenuActions, MenuActionTypes} from '../actions/menu';

export interface State {
  teamsMenuExpanded: boolean;
}

export const intialState: State = {
  teamsMenuExpanded: false
};

export function reducer (state: State = intialState, action: MenuActions) {
  switch ( action.type ) {
    case MenuActionTypes.ExpandTeams:
      return { teamsMenuExpanded: true};
    case MenuActionTypes.CollapseTeams:
      return { teamsMenuExpanded: false};
    default:
      return state;
  }
}

export const getTeamsMenuExpanded = (state: State) => state.teamsMenuExpanded;
