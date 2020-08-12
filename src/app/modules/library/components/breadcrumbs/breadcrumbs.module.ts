import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UsageComponent } from './usage/usage.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    OverviewComponent,
    ApiComponent,
    PlaygroundComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsRoutingModule,
    ComponentHeaderModule,
    BreadcrumbsModule,
    RouterModule
  ]
})
export class BreadcrumbsLibraryModule { }