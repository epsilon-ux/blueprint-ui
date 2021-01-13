import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartLineModule, ActionModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { ChartLineRoutingModule } from './chart-line-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { ChartLineComponent } from './chart-line.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    ChartLineComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    ChartLineRoutingModule,
    ChartLineModule,
    ActionModule,
    MarkdownModule
  ],
  providers: [],
  exports: [ChartLineComponent]
})
export class ChartLineLibraryModule { }