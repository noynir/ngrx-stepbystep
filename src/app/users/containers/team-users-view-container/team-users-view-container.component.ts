import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { UsersService } from '../../services/users.service';
import {TeamsService} from '../../../teams/services/teams.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ChooseTeamDialogComponent} from '../../components/choose-team-dialog/choose-team-dialog.component';
import {Subject} from 'rxjs';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {Team} from '../../../teams/models/team-model';
import {UserTableDataModel} from '../../models/UserTableData.model';
import { map, share, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-team-users-view-container',
  templateUrl: './team-users-view-container.component.html',
  styleUrls: ['./team-users-view-container.component.scss']
})
export class TeamUsersViewContainerComponent implements OnInit {

  teamMembers$: Observable<Array<UserTableDataModel>>;

  allTeams$: Observable<Array<Team>>;

  dialogClosedResult$: Subject<number> = new Subject();


  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private teamsService: TeamsService,
              private dialog: MatDialog) { }

  ngOnInit() {
    const params$ = this.route.paramMap
        .pipe(
          map(params => params && params.get('id'))
        );

    this.allTeams$ = this.teamsService.getTeams()
      .pipe(share());

    this.teamMembers$ = combineLatest(params$,
      this.allTeams$,
      this.dialogClosedResult$.pipe(startWith(0)),
      (teamId, teams) => ({ teamId, teams })
    ).pipe(
      switchMap( ( data ) => this.usersService.getTeamUsers(data.teamId),
        (data, users) => ({users: users, teams: data.teams}) ),
      map( data => {
        return data.users.map((user) => {
          const team = data.teams.find(t => t.id === user.teamId);
          return Object.assign({}, user, { team: team});
        })
      })
    );

  }

  moveUsers(users: Array<UserModel>){

    if(users && users.length > 0){
     const dialogRef = this.openDialog(ChooseTeamDialogComponent, {
       width: '350px',
       data:{ teams: this.allTeams$,  count: users.length  }
     });

     dialogRef.afterClosed()
      .pipe(
        switchMap((result) => {
          if(result){
            return this.usersService.updateUsers( users.map(user => {
              user.teamId = result;
              return user;
            }));
          }
          return of(null);
        })
      ).subscribe((res) => {
         if(res){
          this.dialogClosedResult$.next(res.teamId);
         }
        });

    }

  }

  removeUsers(users: Array<UserModel>){
    if(users && users.length > 0){
      const dialogRef = this.openDialog(ConfirmDialogComponent, {
        width: '350px',
        data:{ title: `Remove from team`, message: `Are you sure you want to remove ${users.length} users from team?`  }
      });

      dialogRef.afterClosed()
        .pipe(
          switchMap((result) => {
            if(result){
              return this.usersService.updateUsers( users.map( user =>{
                user.teamId = null;
                return user;
              }));
            }
            return of(null);
          })
        )
        .subscribe((res) => {
          if(res){
            this.dialogClosedResult$.next(res.teamId);
          }
        });

    }
  }

  openDialog<T>(component, config): MatDialogRef<T>{

    return this.dialog.open(component, config);
  }

}
