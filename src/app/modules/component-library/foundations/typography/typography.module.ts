import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingPageHeaderModule } from 'epsilon-blueprint';
import { TypographyRoutingModule } from './typography-routing.module';

import { TypographyComponent } from './typography.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    TypographyComponent, 
    OverviewComponent, 
    UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TypographyRoutingModule,
    LandingPageHeaderModule
  ],
  providers: [],
  exports: [TypographyComponent]
})
export class TypographyModule { }