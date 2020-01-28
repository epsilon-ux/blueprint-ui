import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageHeaderComponent } from './landing-page-header.component';


@NgModule({
  declarations: [
    LandingPageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LandingPageHeaderComponent]
})
export class LandingPageHeaderModule { }
