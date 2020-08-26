import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusIndicatorModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { StatusIndicatorRoutingModule } from './status-indicator-routing.module';

import { StatusIndicatorComponent } from './status-indicator.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    StatusIndicatorComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    StatusIndicatorRoutingModule,
    StatusIndicatorModule
  ],
  providers: [],
  exports: [StatusIndicatorComponent]
})
export class StatusIndicatorLibraryModule { }