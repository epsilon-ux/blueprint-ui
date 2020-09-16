import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { LandingPageHeaderModule, HeaderModule, ActionModule, DropdownModule } from 'epsilon-blueprint';
import { NavPrimaryRoutingModule } from './nav-primary-routing.module';

import { NavPrimaryComponent } from './nav-primary.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    NavPrimaryComponent,
    OverviewComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    LandingPageHeaderModule,
    HeaderModule,
    ActionModule,
    DropdownModule,
    NavPrimaryRoutingModule
  ],
  providers: [],
  exports: [NavPrimaryComponent]
})
export class NavPrimaryModule { }