import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoadingIndicatorComponent]
})

export class LoadingIndicatorModule { }