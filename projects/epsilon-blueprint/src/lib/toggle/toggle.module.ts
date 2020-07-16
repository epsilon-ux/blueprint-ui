import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToggleComponent]
})
export class ToggleModule { }