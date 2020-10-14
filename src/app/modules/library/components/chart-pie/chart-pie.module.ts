import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartPieModule, ActionModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { ChartPieRoutingModule } from './chart-pie-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { ChartPieComponent } from './chart-pie.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    ChartPieComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    ChartPieRoutingModule,
    ChartPieModule,
    ActionModule,
    MarkdownModule
  ],
  providers: [],
  exports: [ChartPieComponent]
})
export class ChartPieLibraryModule { }