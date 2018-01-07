import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import {UsersDataService} from '../services/users-data.service';
import {
  UsersActions, UsersActionTypes, UserDelete, UsersLoad, UsersLoadComplete, UsersUpdate,
  UsersUpdateComplete, UsersDeleteComplete
} from '../actions/users';
import * as fromUsers from '../reducers/users';

@Injectable()
export class UsersEffects {

  constructor(private store$: Store<fromUsers.State>, private actions$: Actions, private dataService: UsersDataService){}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$
    .ofType<UsersLoad>(UsersActionTypes.UsersLoad)
    .map(action =>  action.payload)
    .switchMap( (loadOptions) => {
        if(loadOptions && loadOptions.teamId){
          return this.dataService.getUsersInTeam(loadOptions.teamId);
        }
        return this.dataService.getUsers();
    })
    .map( (data) => new UsersLoadComplete(data));

  @Effect()
  deleteUsers$: Observable<Action> = this.actions$
    .ofType<UserDelete>(UsersActionTypes.UserDelete)
    .withLatestFrom(this.store$.select(fromUsers.selectUserState))
    .map(([update, state]) => state.currentUsers.selectedUsersIds[0] )
    .switchMap( id => this.dataService.deleteUser(id), (id, data) => id)
    .map((id) =>  new UsersDeleteComplete(id));


  @Effect()
  updateUsers$: Observable<Action> = this.actions$
    .ofType<UsersUpdate>(UsersActionTypes.UsersUpdate)
    .map(action => action.payload)
    .withLatestFrom(this.store$.select(fromUsers.selectUserState))
    .map(([update, state]) => {
      const userEntities = state.currentUsers.entities;
      return state.currentUsers.selectedUsersIds.map(id => {
        return Object.assign({}, userEntities[id], update);
      });
    })
    .switchMap( usersToUpdate => this.dataService.updateUsers(usersToUpdate),
      (usersToUpdate, data) => usersToUpdate )
    .map( (usersToUpdate) => {
      return new UsersUpdateComplete(usersToUpdate);
    });

}
