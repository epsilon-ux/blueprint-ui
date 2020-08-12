import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RibbonModule, ActionModule, CheckboxModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { RibbonRoutingModule } from './ribbon-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { RibbonComponent } from './ribbon.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    RibbonComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    RibbonRoutingModule,
    RibbonModule,
    ActionModule,
    CheckboxModule,
    MarkdownModule
  ],
  providers: [],
  exports: [RibbonComponent]
})
export class RibbonLibraryModule { }