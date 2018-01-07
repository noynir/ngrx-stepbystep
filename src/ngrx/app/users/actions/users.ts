import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';
import {Update} from '@ngrx/entity/src/models';
import {UsersLoadOptions} from '../models/UsersLoadOptions';

export enum UsersActionTypes {
  UsersLoad =  '[Users] Load',
  UserLoadComplete = '[Users] Load Complete',
  UsersUpdate = '[Users] update',
  UsersUpateComplete = '[Users] update complete',
  UserDelete = '[Users] delete',
  UserDeleteComplete = '[Users] delete complete',
  UsersSelect = '[Users] users select'
}

export class UsersLoad implements Action{
  readonly type = UsersActionTypes.UsersLoad
  constructor(public payload?: UsersLoadOptions){}
}
export class UsersLoadComplete implements Action{
  readonly type = UsersActionTypes.UserLoadComplete;
  constructor(public payload: UserModel[] ){}
}
export class UsersUpdate implements Action{
  readonly type = UsersActionTypes.UsersUpdate;
  constructor(public payload: Partial<UserModel>){}
}
export class UsersUpdateComplete implements Action{
  readonly type = UsersActionTypes.UsersUpateComplete;
  constructor(public payload: UserModel[] ){}
}
export class UserDelete implements Action{
  readonly type = UsersActionTypes.UserDelete;
  constructor(){}
}
export class UsersDeleteComplete implements Action{
  readonly type = UsersActionTypes.UserDeleteComplete;
  constructor(public payload: number ){}
}
export class UsersSelect implements Action{
  readonly type = UsersActionTypes.UsersSelect;
  constructor(public payload: Array<number>){}
}

export type UsersActions = UsersLoad
  | UsersLoadComplete
  | UsersUpdate
  | UsersUpdateComplete
  | UserDelete
  | UsersDeleteComplete
  | UsersSelect;



