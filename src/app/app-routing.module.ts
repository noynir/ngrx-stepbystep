import { Routes } from '@angular/router';
import { TeamViewContainerComponent } from './teams/containers/team-view-container/team-view-container.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'teams', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
