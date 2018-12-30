import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersViewContainerComponent} from './containers/users-view-container/users-view-container.component';

const routes: Routes =[
  {path:'users', component: UsersViewContainerComponent }
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UsersRoutingModule {}
