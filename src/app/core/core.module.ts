import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule, MatGridListModule, MatButtonToggleModule, MatExpansionModule} from '@angular/material';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatExpansionModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [LayoutComponent, SidenavToggleComponent],
  exports: [LayoutComponent, MatSidenavModule, MatExpansionModule, SidenavToggleComponent]
})
export class CoreModule { }
