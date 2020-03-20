import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingPageHeaderModule } from 'epsilon-blueprint';
import { IconsRoutingModule } from './icons-routing.module';

import { IconsComponent } from './icons.component';
import { OverviewComponent } from './overview/overview.component';
import { IconLibraryComponent } from './icon-library/icon-library.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    IconsComponent, 
    OverviewComponent,
    IconLibraryComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsRoutingModule,
    LandingPageHeaderModule
  ],
  providers: [],
  exports: [IconsComponent]
})
export class IconsModule { }