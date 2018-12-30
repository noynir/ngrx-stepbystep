import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {UserModel} from '../../models/user.model';
import {UsersActions, UsersActionTypes} from '../actions/users';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRoot from '../../reducers';

export interface UsersState extends EntityState<UserModel> {
  selectedUsersIds: number[] | null;
};

export interface State extends fromRoot.AppState {
  currentUsers: UsersState;
}

export const adapter = createEntityAdapter<UserModel>({
  selectId: (user) => user.id,
  sortComparer: false
});


export const initialState: UsersState = adapter.getInitialState({
  selectedUsersIds:[]
});


export function reducer( state: UsersState = initialState, action: UsersActions): UsersState{

    switch (action.type){
      case UsersActionTypes.UserLoadComplete:
        return Object.assign({}, state, adapter.addMany(action.payload, adapter.getInitialState()));
      case UsersActionTypes.UsersUpateComplete:
        return Object.assign({}, state, { ...adapter.updateMany( action.payload.map( u => ({
            id: u.id,
            changes: u
          }) ), state) });
      case UsersActionTypes.UserDeleteComplete:
        return Object.assign({}, state, { ...adapter.removeOne(action.payload, state) });
      case UsersActionTypes.UsersSelect:
        return Object.assign({}, state, { selectedUsersIds: action.payload || [] });
      default:
        return state;
    }
}

export const reducers = {
  currentUsers: reducer
};


export const selectUserState = createFeatureSelector<State>('users');
export const selectCurrentUsers = createSelector(selectUserState, state => state.currentUsers);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectCurrentUsers);
