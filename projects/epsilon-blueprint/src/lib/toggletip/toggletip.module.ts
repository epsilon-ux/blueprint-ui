import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToggletipComponent } from './toggletip.component';

@NgModule({
  declarations: [ToggletipComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToggletipComponent]
})
export class ToggletipModule { }