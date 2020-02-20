import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSecondaryComponent } from './nav-secondary.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavSecondaryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavSecondaryComponent]
})
export class NavSecondaryModule { }
