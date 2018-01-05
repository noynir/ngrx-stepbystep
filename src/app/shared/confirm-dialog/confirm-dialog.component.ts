import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

}
