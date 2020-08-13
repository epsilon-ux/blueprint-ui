import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { DateTimePickerRoutingModule } from './date-time-picker-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { DateTimePickerComponent } from './date-time-picker.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    DateTimePickerComponent,
    OverviewComponent,
    UsageComponent,
    PlaygroundComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ComponentHeaderModule,
    DateTimePickerRoutingModule
  ],
  providers: [],
  exports: [DateTimePickerComponent]
})
export class DateTimePickerLibraryModule { }