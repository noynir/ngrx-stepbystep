import { LayoutActions, LayoutActionTypes } from '../actions/layout';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: true
};

export function reducer (state: State = initialState, action: LayoutActions  ) {
  switch ( action.type ) {
    case LayoutActionTypes.CloseSidenav:
      return { showSidenav: false};
    case LayoutActionTypes.OpenSidenav:
      return { showSidenav: true }
  }
}

export const getShowSideNav = (state: State) => state.showSidenav;
