import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  CommonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  BrowserAnimationsModule
]

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
