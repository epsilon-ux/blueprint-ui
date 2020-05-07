import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RibbonComponent } from './ribbon.component';

@NgModule({
  declarations: [RibbonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RibbonComponent]
})
export class RibbonModule { }