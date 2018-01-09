import {UserModel} from '../../models/user.model';
import {Team} from '../../teams/models/team-model';

export class TableEditAction {
  constructor(public type?: 'updated' | 'delete' | 'add', public users?: Array<UserModel| UserTableDataModel>){}
}

export interface UserTableDataModel extends UserModel {
    team: Team;
}
