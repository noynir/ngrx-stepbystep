import { Injectable } from '@angular/core';
import { UsersDataService } from './users-data.service';
import {UserModel} from '../../models/user.model';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {UserDelete, UsersActionTypes, UsersLoad, UsersSelect, UsersUpdate} from '../actions/users';
import {Observable} from 'rxjs/Observable';
import * as fromUsers from '../reducers/users';
import {UsersEffects} from '../effects/users';



@Injectable()
export class UsersService {

  constructor(private store: Store<fromUsers.State>,
            private effects: UsersEffects,
            private dataService: UsersDataService) { }

  get allUsers$ (): Observable<Array<UserModel>> {

    return this.store.select(fromUsers.selectAll);
  }

  get usersUpdated$():Observable<boolean> {
    return this.effects.updateUsers$.map( action =>  action.type === UsersActionTypes.UsersUpateComplete);
  }
  getUsers(){
    this.store.dispatch(new UsersLoad());
  }

  getTeamUsers(teamId: string | number ) {
    const teamParam = typeof(teamId) === 'string' ? teamId : teamId.toString();
    this.store.dispatch(new UsersLoad({teamId: teamParam}));
    // return this.dataService.getUsersInTeam(teamParam);
  }

  updateUsers(update: Partial<UserModel>){

    this.store.dispatch(new UsersUpdate(update));

  }

  selectUsers(users: UserModel[]){
    this.store.dispatch(new UsersSelect(users.map(u => u.id)));
  }

  deleteUser(){
    this.store.dispatch(new UserDelete());
  }

}
