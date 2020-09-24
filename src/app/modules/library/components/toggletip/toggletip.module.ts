import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToggletipModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { ToggletipRoutingModule } from './toggletip-routing.module';

import { ToggletipComponent } from './toggletip.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    ToggletipComponent,
    OverviewComponent,
    ApiComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    ToggletipRoutingModule,
    ToggletipModule
  ],
  providers: [],
  exports: [ToggletipComponent]
})
export class ToggletipLibraryModule { }