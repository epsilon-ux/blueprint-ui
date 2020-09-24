import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { ProgressBarRoutingModule } from './progress-bar-routing.module';

import { ProgressBarComponent } from './progress-bar.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    ProgressBarComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    ProgressBarRoutingModule,
    ProgressBarModule
  ],
  providers: [],
  exports: [ProgressBarComponent]
})
export class ProgressBarLibraryModule { }