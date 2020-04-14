import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TableModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { ShowMoreModule } from 'src/app/shared/show-more/show-more.module';
import { TableRoutingModule } from './table-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { TableComponent } from './table.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    TableComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    TableRoutingModule,
    TableModule,
    ShowMoreModule,
    MarkdownModule.forChild()
  ],
  providers: [],
  exports: [TableComponent]
})
export class TableLibraryModule { }
