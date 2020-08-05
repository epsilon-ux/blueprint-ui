import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavSecondaryComponent } from './nav-secondary.component';
import { CollapsiblePanelModule } from '../collapsible-panel/collapsible-panel.module';

@NgModule({
  declarations: [NavSecondaryComponent],
  imports: [
    CommonModule,
    RouterModule,
    CollapsiblePanelModule
  ],
  exports: [NavSecondaryComponent]
})
export class NavSecondaryModule { }