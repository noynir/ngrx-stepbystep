import { HttpParams } from '@angular/common/http';
import { Role } from '../../models/role.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http/src/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RolesDataService {

  private readonly url = `${environment.API_base_url}/roles`;

  constructor(private httpClient: HttpClient) { }

  getTeamRoles(teamId: string): Observable<Array<Role>> {

    return this.httpClient.get<Array<Role>>(this.url, {
      params:new HttpParams().set('teamId', teamId)
    });

  }

}
