import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartLineComponent } from './chart-line.component';
import { ChartTooltipModule } from '../chart-tooltip/chart-tooltip.module';

@NgModule({
  declarations: [ChartLineComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChartTooltipModule
  ],
  exports: [ChartLineComponent]
})
export class ChartLineModule { }