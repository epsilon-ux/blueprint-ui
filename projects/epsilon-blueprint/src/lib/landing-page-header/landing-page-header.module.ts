import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingPageHeaderComponent } from './landing-page-header.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ActionModule } from '../action/action.module';

@NgModule({
  declarations: [
    LandingPageHeaderComponent
  ],
  imports: [CommonModule, DropdownModule, ActionModule],
  exports: [LandingPageHeaderComponent],
  providers: []
})
export class LandingPageHeaderModule {}
