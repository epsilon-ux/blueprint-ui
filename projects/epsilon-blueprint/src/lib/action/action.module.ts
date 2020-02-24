import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionComponent } from './action.component';

@NgModule({
  declarations: [ActionComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ActionComponent]
})
export class ActionModule { }
