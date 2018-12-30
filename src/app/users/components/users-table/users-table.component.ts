import { UserModel } from '../../../models/user.model';
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel, SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  multipleSelection = false;

  @Input()
  users: Array<UserModel>;

  @Output()
  deleteUsersClick= new EventEmitter<Array<UserModel>>();

  @Output()
  moveUsersClick = new EventEmitter<Array<UserModel>>();

  usersDataSource: MatTableDataSource<UserModel>;

  displayedColumns = ['avatar', 'id', 'username', 'email', 'firstName', 'lastName','team', 'action'];
  selection = new SelectionModel<UserModel>(true, []);

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    const usersChange = changes['users'];
    if (usersChange && usersChange.currentValue) {
        this.usersDataSource = new MatTableDataSource(usersChange.currentValue);
        this.selection.clear();
    }
    if(changes['multipleSelection']){
      this.setColumns();
    }
  }


  cellCheckboxChange($event, row) {
    if ($event) {
      this.selection.toggle(row);
    }
  }
  headerCheckboxChange($event) {
    if ($event) {
      this.masterToggle();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.usersDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.usersDataSource.data.forEach(row => this.selection.select(row));

  }

  moveSelectedUsers(user: UserModel) {
    const users = user ? [user] : this.selection.selected;
    this.moveUsersClick.emit(users);
  }
  deleteSelectedUsers(user: UserModel) {
    const users = user ? [user] : this.selection.selected;
    this.deleteUsersClick.emit(users);
  }

  setColumns(){
    if(this.multipleSelection){
      this.displayedColumns = ['select', ...this.displayedColumns];
    }
    else{
      this.displayedColumns = this.displayedColumns.slice(1);
    }
  }


}
