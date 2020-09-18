import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { RadioButtonRoutingModule } from './radio-button-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { RadioButtonComponent } from './radio-button.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    RadioButtonComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    RadioButtonRoutingModule,
    RadioButtonModule
  ],
  providers: [],
  exports: [RadioButtonComponent]
})
export class RadioButtonLibraryModule { }