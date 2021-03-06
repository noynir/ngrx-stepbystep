import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './reducers';
import { TeamsModule } from './teams/teams.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MaterialModule} from './material/material.module';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './custom-router-serializer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromRoot.reducers),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    !environment.production ?
      StoreDevtoolsModule.instrument({
        maxAge: 25 // Retains last 25 states
      })
      : [],
    EffectsModule.forRoot([]),
    TeamsModule,
    UsersModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
