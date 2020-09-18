import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { CheckboxRoutingModule } from './checkbox-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { CheckboxComponent } from './checkbox.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    CheckboxComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    CheckboxRoutingModule,
    CheckboxModule
  ],
  providers: [],
  exports: [CheckboxComponent]
})
export class CheckboxLibraryModule { }