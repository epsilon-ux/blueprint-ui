import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { NavSecondaryModule } from 'epsilon-blueprint';

import { RouterModule } from '@angular/router';
import { NavSecondaryRoutingModule } from './nav-secondary-routing.module';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { NavSecondaryComponent } from './nav-secondary.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';
import { PlaygroundComponent } from './playground/playground.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    NavSecondaryComponent,
    UsageComponent,
    ApiComponent,
    PlaygroundComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavSecondaryRoutingModule,
    NavSecondaryModule,
    ComponentHeaderModule,
    MarkdownModule.forChild()
  ]
})
export class NavSecondaryLibraryModule { }