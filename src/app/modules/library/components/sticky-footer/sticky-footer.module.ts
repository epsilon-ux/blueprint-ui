import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StickyFooterModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { StickyFooterRoutingModule } from './sticky-footer-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { StickyFooterComponent } from './sticky-footer.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    StickyFooterComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    StickyFooterRoutingModule,
    StickyFooterModule
  ],
  providers: [],
  exports: [StickyFooterComponent]
})
export class StickyFooterLibraryModule { }