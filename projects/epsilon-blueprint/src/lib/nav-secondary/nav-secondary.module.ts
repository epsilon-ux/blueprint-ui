import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSecondaryComponent } from './nav-secondary.component';



@NgModule({
  declarations: [NavSecondaryComponent],
  imports: [
    CommonModule
  ],
  exports: [NavSecondaryComponent]
})
export class NavSecondaryModule { }
