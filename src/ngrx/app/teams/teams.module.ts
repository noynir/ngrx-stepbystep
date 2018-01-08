import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsContainerComponent } from './containers/teams-container/teams-container.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { TeamsService } from './services/teams.service';
import { TeamsDataService } from './services/teams-data.service';
import { TeamViewContainerComponent } from './containers/team-view-container/team-view-container.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { UsersModule } from '../users/users.module';
import {MaterialModule} from '../material/material.module';
import {StoreModule} from '@ngrx/store';
import * as fromTeams from './reducers/teams'
import {EffectsModule} from '@ngrx/effects';
import {TeamsEffects} from './effects/teams';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule,
    UsersModule,
    StoreModule.forFeature('teams', fromTeams.reducers),
    EffectsModule.forFeature([TeamsEffects])
  ],
  providers: [TeamsService, TeamsDataService],
  declarations: [TeamsContainerComponent,
    TeamsListComponent,
    TeamListItemComponent,
    TeamViewContainerComponent],
  exports: [TeamsContainerComponent]
})
export class TeamsModule { }
