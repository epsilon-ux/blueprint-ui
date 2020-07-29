import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapsiblePanelComponent } from './collapsible-panel.component';

@NgModule({
  declarations: [CollapsiblePanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CollapsiblePanelComponent]
})
export class CollapsiblePanelModule { }