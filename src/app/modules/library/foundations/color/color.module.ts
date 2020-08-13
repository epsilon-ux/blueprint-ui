import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingPageHeaderModule } from 'epsilon-blueprint';
import { ColorRoutingModule } from './color-routing.module';

import { ColorComponent } from './color.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { ColorCombinationsComponent } from './color-combinations/color-combinations.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
  declarations: [
    ColorComponent,
    OverviewComponent,
    UsageComponent,
    ColorCombinationsComponent,
    UtilitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ColorRoutingModule,
    LandingPageHeaderModule
  ],
  providers: [],
  exports: [ColorComponent]
})
export class ColorModule { }