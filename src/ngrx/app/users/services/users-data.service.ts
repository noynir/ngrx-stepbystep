import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UsersDataService {

  private readonly url = `${environment.API_base_url}/users`;



  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<UserModel>> {
    return this.httpClient.get<Array<UserModel>>(this.url);
  }
  getUsersInTeam(teamId: string): Observable<Array<UserModel>> {

    return this.httpClient.get<Array<UserModel>>(this.url, {
      params: new HttpParams().set('teamId', teamId)
    });
  }

  updateUsers(users: UserModel[]){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.httpClient.put(this.url, JSON.stringify(users), httpOptions);


  }

  deleteUser(userId: number){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.httpClient.delete(`${this.url}/${userId}`, httpOptions);

  }



}
