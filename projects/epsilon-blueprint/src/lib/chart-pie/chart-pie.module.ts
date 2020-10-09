import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartPieComponent } from './chart-pie.component';

@NgModule({
  declarations: [ChartPieComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChartPieComponent]
})
export class ChartPieModule { }