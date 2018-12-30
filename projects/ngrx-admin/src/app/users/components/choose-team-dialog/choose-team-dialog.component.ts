import {Component, Inject, Input, OnInit} from '@angular/core';
import {Team} from '../../../teams/models/team-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-choose-team-dialog',
  templateUrl: './choose-team-dialog.component.html',
  styleUrls: ['./choose-team-dialog.component.scss']
})
export class ChooseTeamDialogComponent implements OnInit {


  selectedTeam: Team;

  usersCount: number;

  teams: Observable<Team[]>

  constructor(private dialog: MatDialogRef<ChooseTeamDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
      this.teams = data.teams;
      this.usersCount = data.count;
  }

  onCancel(){
    this.dialog.close();
  }

  ngOnInit() {
  }

}
