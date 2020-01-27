import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseTemplateComponent } from './base-template.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';


@NgModule({
  declarations: [
    BaseTemplateComponent,
    PrimaryNavComponent,
    SecondaryNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BaseTemplateComponent]
})
export class BaseTemplateModule { }
