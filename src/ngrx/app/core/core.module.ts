import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {SidenavToggleComponent} from './sidenav-toggle/sidenav-toggle.component';

@NgModule({
  imports: [
    HttpClientModule,
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule,

  ],
  declarations: [LayoutComponent, SidenavToggleComponent],
  exports: [LayoutComponent, SidenavToggleComponent]
})
export class CoreModule { }
