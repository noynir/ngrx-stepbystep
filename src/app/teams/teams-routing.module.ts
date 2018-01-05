import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamViewContainerComponent } from './containers/team-view-container/team-view-container.component';

const routes: Routes = [
  {
    path: 'teams/:id',
    component: TeamViewContainerComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
