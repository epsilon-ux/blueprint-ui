import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { LogoRoutingModule } from './logo-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { LogoComponent } from './logo.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    LogoComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    LogoRoutingModule,
    LogoModule
  ],
  providers: [],
  exports: [LogoComponent]
})
export class LogoLibraryModule { }