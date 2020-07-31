import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageHeaderModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { LandingPageHeaderRoutingModule } from './landing-page-header-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { LandingPageHeaderComponent } from './landing-page-header.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    LandingPageHeaderComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    LandingPageHeaderRoutingModule,
    LandingPageHeaderModule,
    MarkdownModule
  ],
  providers: [],
  exports: [LandingPageHeaderComponent]
})
export class LandingPageHeaderLibraryModule { }