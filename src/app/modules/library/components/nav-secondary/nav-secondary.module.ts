import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSecondaryModule, CollapsiblePanelModule } from 'epsilon-blueprint';

import { RouterModule } from '@angular/router';
import { NavSecondaryRoutingModule } from './nav-secondary-routing.module';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { NavSecondaryComponent } from './nav-secondary.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    NavSecondaryComponent,
    UsageComponent,
    ApiComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavSecondaryRoutingModule,
    NavSecondaryModule,
    CollapsiblePanelModule,
    ComponentHeaderModule
  ]
})
export class NavSecondaryLibraryModule { }