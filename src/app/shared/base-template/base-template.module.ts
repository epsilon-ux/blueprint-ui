import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseTemplateComponent } from './base-template.component';
import { NavPrimaryComponent } from './nav-primary/nav-primary.component';
import { NavSecondaryComponent } from './nav-secondary/nav-secondary.component';


@NgModule({
  declarations: [
    BaseTemplateComponent,
    NavPrimaryComponent,
    NavSecondaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BaseTemplateComponent]
})
export class BaseTemplateModule { }
