import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RolesDataService } from './roles-data.service';

@Injectable()
export class RolesService {



  constructor(private dataService: RolesDataService) { }

  getTeamRoles(teamId: string | number ) {
    const teamParam = typeof(teamId) === 'string' ? teamId : teamId.toString();
    return this.dataService.getTeamRoles(teamParam);
  }


}
