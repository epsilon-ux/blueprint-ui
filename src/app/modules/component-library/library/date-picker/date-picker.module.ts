import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { FormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { DatePickerRoutingModule } from './date-picker-routing.module';

import { OverviewComponent } from './overview/overview.component';
import { DatePickerComponent } from './date-picker.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    DatePickerComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ComponentHeaderModule,
    DatePickerRoutingModule
  ],
  providers: [],
  exports: [DatePickerComponent]
})
export class DatePickerLibraryModule { }
