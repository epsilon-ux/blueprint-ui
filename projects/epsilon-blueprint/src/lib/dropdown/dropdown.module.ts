import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    ActionModule
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }