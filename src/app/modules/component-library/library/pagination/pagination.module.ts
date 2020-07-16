import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'epsilon-blueprint';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';


@NgModule({
  declarations: [PaginationComponent, OverviewComponent, ApiComponent, UsageComponent, PlaygroundComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    ComponentHeaderModule,
    PaginationModule
  ]
})
export class PaginationLibraryModule { }