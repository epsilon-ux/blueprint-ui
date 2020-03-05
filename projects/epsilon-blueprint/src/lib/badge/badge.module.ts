import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BadgeComponent]
})
export class BadgeModule { }
