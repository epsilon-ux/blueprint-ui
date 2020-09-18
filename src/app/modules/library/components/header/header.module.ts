import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { HeaderRoutingModule } from './header-routing.module';

import { HeaderComponent } from './header.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    HeaderRoutingModule,
    HeaderModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderLibraryModule { }