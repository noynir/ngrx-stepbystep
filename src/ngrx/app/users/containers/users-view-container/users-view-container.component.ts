import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UsersService} from '../../services/users.service';
import {TeamsService} from '../../../teams/services/teams.service';
import {Observable, combineLatest} from 'rxjs';
import {Team} from '../../../teams/models/team-model';
import {TableEditAction, UserTableDataModel} from '../../models/UserTableData.model';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {UserModel} from '../../../models/user.model';
import {ChooseTeamDialogComponent} from '../../components/choose-team-dialog/choose-team-dialog.component';
import {BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-users-view-container',
  templateUrl: './users-view-container.component.html',
  styleUrls: ['./users-view-container.component.scss']
})
export class UsersViewContainerComponent implements OnInit {

  users$: Observable<Array<UserTableDataModel>>;

  private userUpdates$: BehaviorSubject<TableEditAction> = new BehaviorSubject<TableEditAction>(null);

  allTeams$: Observable<Array<Team>>;

  constructor(private usersService: UsersService,
              private teamsService: TeamsService,
              private dialog: MatDialog) { }
  ngOnInit() {

      this.allTeams$ = this.teamsService.allTeams$;

      this.users$ =  combineLatest(
        this.usersService.allUsers$,
        this.allTeams$
      ).pipe(
        map( ([users, teams]) => {
          return users.reduce((usersArr, user) => {
                  const team = teams.find(t => t.id === user.teamId);
                  usersArr.push(Object.assign({}, user, {team: team}));
                  return usersArr;
              },[]);
        })
      );

      this.usersService.getUsers();

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
      const user = users[0];
      this.usersService.selectUsers(users);
      const dialogRef = this.openDialog(ConfirmDialogComponent, {
        width: '350px',
        data:{ title: `Remove user`, message: `Are you sure you want to remove ${user.username} ?`  }
      });

      dialogRef.afterClosed()
        .subscribe((res) => {
          if(res){
            this.usersService.deleteUser();
          }
        });

    }
  }

  openDialog<T>(component, config): MatDialogRef<T>{

    return this.dialog.open(component, config);
  }


}
