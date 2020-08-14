import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { LoadingIndicatorRoutingModule } from './loading-indicator-routing.module';

import { LoadingIndicatorComponent } from './loading-indicator.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    LoadingIndicatorComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    LoadingIndicatorRoutingModule,
    LoadingIndicatorModule
  ],
  exports: [LoadingIndicatorComponent]
})

export class LoadingIndicatorLibraryModule { }