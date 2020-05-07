import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TileModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { TileRoutingModule } from './tile-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { TileComponent } from './tile.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    TileComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    TileRoutingModule,
    TileModule
  ],
  providers: [],
  exports: [TileComponent]
})
export class TileLibraryModule { }