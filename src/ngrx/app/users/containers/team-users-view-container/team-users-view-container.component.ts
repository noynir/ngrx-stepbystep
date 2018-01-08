import { ActivatedRoute, ParamMap } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscribable} from 'rxjs/Observable';
import { UserModel } from '../../../models/user.model';
import { UsersService } from '../../services/users.service';
import {TeamsService} from '../../../teams/services/teams.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ChooseTeamDialogComponent} from '../../components/choose-team-dialog/choose-team-dialog.component';
import {Subject} from 'rxjs/Subject';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {Team} from '../../../teams/models/team-model';
import {TableEditAction, UserTableDataModel} from '../../models/UserTableData.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-team-users-view-container',
  templateUrl: './team-users-view-container.component.html',
  styleUrls: ['./team-users-view-container.component.scss']
})
export class TeamUsersViewContainerComponent implements OnInit,OnDestroy {

  teamMembers$: Observable<Array<UserTableDataModel>>;

  allTeams$: Observable<Array<Team>>;

  userUpdatesSub: Subscription;
  private teamId: string;


  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private teamsService: TeamsService,
              private dialog: MatDialog) { }
  ngOnInit() {

    this.route.paramMap.map(params => params && params.get('id'))
      .subscribe((id) => {
        this.teamId = id;
        this.loadUsers();
      });


    this.allTeams$ = this.teamsService.allTeams$;
    this.teamsService.getTeams();

    this.teamMembers$ = Observable.combineLatest(
      this.usersService.allUsers$,
      this.allTeams$
    ).map( ([users, teams]) => {
        return users.map((user) => {
          const team = teams.find(t => t.id === user.teamId);
          return Object.assign({}, user, { team: team});
        });
      });

    this.userUpdatesSub = this.usersService.usersUpdated$.filter(res => !!res).subscribe(res => this.loadUsers() );
  }

  loadUsers(){
    this.usersService.getTeamUsers(this.teamId);
  }
  moveUsers(users: Array<UserModel>){

    if(users && users.length > 0){

      this.usersService.selectUsers(users);
      const dialogRef = this.openDialog(ChooseTeamDialogComponent, {
       width: '350px',
       data:{ teams: this.allTeams$,  count: users.length  }
     });

      dialogRef.afterClosed()
        .subscribe((res) => {
          if(res){
            this.usersService.updateUsers({teamId: res});
          }
        });
    }

  }

  removeUsers(users: Array<UserModel>){
    if(users && users.length > 0){
      this.usersService.selectUsers(users);
      const dialogRef = this.openDialog(ConfirmDialogComponent, {
        width: '350px',
        data:{ title: `Remove from team`, message: `Are you sure you want to remove ${users.length} users from team?`  }
      });

      dialogRef.afterClosed()
        .subscribe((res) => {
          if(res){
            this.usersService.updateUsers({teamId: 0});
          }
        });

    }
  }

  openDialog<T>(component, config): MatDialogRef<T>{

    return this.dialog.open(component, config);
  }

  ngOnDestroy() {
    this.userUpdatesSub.unsubscribe();
  }

}
