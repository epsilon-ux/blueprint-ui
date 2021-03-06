import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TileModule } from 'epsilon-blueprint';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { TileRoutingModule } from './tile-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { TileComponent } from './tile.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    TileComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    TileRoutingModule,
    TileModule,
    MarkdownModule
  ],
  providers: [],
  exports: [TileComponent]
})
export class TileLibraryModule { }