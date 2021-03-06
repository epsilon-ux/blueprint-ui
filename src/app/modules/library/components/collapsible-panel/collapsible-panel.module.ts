import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapsiblePanelModule, LandingPageHeaderModule, ActionModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { CollapsiblePanelRoutingModule } from './collapsible-panel-routing.module';

import { CollapsiblePanelComponent } from './collapsible-panel.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    CollapsiblePanelComponent,
    OverviewComponent,
    ApiComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    CollapsiblePanelRoutingModule,
    RouterModule,
    ComponentHeaderModule,
    CollapsiblePanelModule,
    LandingPageHeaderModule,
    ActionModule,
    MarkdownModule
  ],
  providers: [],
  exports: [CollapsiblePanelComponent]

})
export class CollapsiblePanelLibraryModule { }