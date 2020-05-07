import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PanelComponent]
})
export class PanelModule { }