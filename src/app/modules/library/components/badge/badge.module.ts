import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { BadgeRoutingModule } from './badge-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { BadgeComponent } from './badge.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    BadgeComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    BadgeRoutingModule,
    BadgeModule
  ],
  providers: [],
  exports: [BadgeComponent]
})
export class BadgeLibraryModule { }