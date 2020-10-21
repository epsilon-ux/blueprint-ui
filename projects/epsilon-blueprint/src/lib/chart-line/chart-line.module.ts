import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartLineComponent } from './chart-line.component';

@NgModule({
  declarations: [ChartLineComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChartLineComponent]
})
export class ChartLineModule { }