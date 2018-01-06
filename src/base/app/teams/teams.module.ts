import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsContainerComponent } from './containers/teams-container/teams-container.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { MatListModule, MatTabsModule } from '@angular/material';
import { TeamsService } from './services/teams.service';
import { TeamsDataService } from './services/teams-data.service';
import { TeamViewContainerComponent } from './containers/team-view-container/team-view-container.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatListModule,
    MatTabsModule,
    UsersModule
  ],
  providers: [TeamsService, TeamsDataService],
  declarations: [TeamsContainerComponent,
    TeamsListComponent,
    TeamListItemComponent,
    TeamViewContainerComponent],
  exports: [TeamsContainerComponent]
})
export class TeamsModule { }
