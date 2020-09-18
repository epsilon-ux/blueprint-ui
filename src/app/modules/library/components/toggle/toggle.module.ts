import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToggleModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { ToggleRoutingModule } from './toggle-routing.module';

import { ToggleComponent } from './toggle.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    ToggleComponent,
    OverviewComponent,
    ApiComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    ToggleRoutingModule,
    ToggleModule
  ],
  providers: [],
  exports: [ToggleComponent]
})
export class ToggleLibraryModule { }