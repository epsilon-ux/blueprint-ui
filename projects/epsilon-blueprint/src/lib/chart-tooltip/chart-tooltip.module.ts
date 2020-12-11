import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartTooltipComponent } from './chart-tooltip.component';

@NgModule({
  declarations: [ChartTooltipComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChartTooltipComponent]
})
export class ChartTooltipModule { }