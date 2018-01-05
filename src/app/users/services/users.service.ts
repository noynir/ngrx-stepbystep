import { Injectable } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { TeamsModule } from '../../teams/teams.module';
import {UserModel} from '../../models/user.model';

@Injectable()
export class UsersService {

  constructor(private dataService: UsersDataService) { }

  getUsers(){
    return this.dataService.getUsers();
  }

  getTeamUsers(teamId: string | number ) {
    const teamParam = typeof(teamId) === 'string' ? teamId : teamId.toString();
    return this.dataService.getUsersInTeam(teamParam);
  }

  updateUsers(users: UserModel[]){

    return this.dataService.updateUsers(users);

  }

  deleteUser(userId: number){
    return this.dataService.deleteUser(userId);
  }

}
