import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RadioButtonComponent]
})
export class RadioButtonModule { }