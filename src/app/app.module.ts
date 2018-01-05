import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './reducers';
import { TeamsModule } from './teams/teams.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromRoot.reducers),
    TeamsModule,
    UsersModule,
    RolesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
