import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { SelectRoutingModule } from './select-routing.module';

import { SelectComponent } from './select.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    SelectComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    SelectRoutingModule,
    MarkdownModule
  ],
  providers: [],
  exports: [SelectComponent]
})
export class SelectLibraryModule { }