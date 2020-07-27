import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapsiblePanelModule } from 'epsilon-blueprint';
import { LandingPageHeaderModule } from 'epsilon-blueprint';
import { ActionModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { CollapsiblePanelRoutingModule } from './collapsible-panel-routing.module';

import { CollapsiblePanelComponent } from './collapsible-panel.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    CollapsiblePanelComponent,
    OverviewComponent,
    ApiComponent,
    PlaygroundComponent,
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
