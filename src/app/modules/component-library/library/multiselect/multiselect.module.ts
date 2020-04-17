import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MultiselectModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { MultiselectRoutingModule } from './multiselect-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { MultiselectComponent } from './multiselect.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    MultiselectComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    MultiselectRoutingModule,
    MultiselectModule
  ],
  providers: [],
  exports: [MultiselectComponent]
})
export class MultiselectLibraryModule { }
