import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseTemplateComponent } from './base-template.component';
import { NavPrimaryComponent } from './nav-primary/nav-primary.component';
import { NavSecondaryModule, CollapsiblePanelModule } from 'epsilon-blueprint';


@NgModule({
  declarations: [
    BaseTemplateComponent,
    NavPrimaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavSecondaryModule,
    CollapsiblePanelModule
  ],
  exports: [BaseTemplateComponent]
})
export class BaseTemplateModule { }