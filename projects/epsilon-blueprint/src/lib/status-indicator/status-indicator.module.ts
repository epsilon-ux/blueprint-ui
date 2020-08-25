import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusIndicatorComponent } from './status-indicator.component';

@NgModule({
  declarations: [StatusIndicatorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [StatusIndicatorComponent]
})
export class StatusIndicatorModule { }