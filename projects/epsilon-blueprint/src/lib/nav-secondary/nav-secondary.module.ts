import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavSecondaryComponent } from './nav-secondary.component';

@NgModule({
  declarations: [NavSecondaryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavSecondaryComponent]
})
export class NavSecondaryModule { }