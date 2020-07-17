import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentHeaderComponent } from './component-header.component';
import { LandingPageHeaderModule } from 'epsilon-blueprint';

@NgModule({
  declarations: [
    ComponentHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingPageHeaderModule
  ],
  exports: [ComponentHeaderComponent]
})
export class ComponentHeaderModule { }