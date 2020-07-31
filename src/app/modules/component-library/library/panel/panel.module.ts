import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelModule, ActionModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { PanelRoutingModule } from './panel-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { PanelComponent } from './panel.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    PanelComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    PanelRoutingModule,
    PanelModule,
    ActionModule,
    MarkdownModule
  ],
  providers: [],
  exports: [PanelComponent]
})
export class PanelLibraryModule { }