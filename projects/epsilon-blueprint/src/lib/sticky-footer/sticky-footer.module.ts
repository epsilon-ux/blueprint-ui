import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StickyFooterComponent } from './sticky-footer.component';

@NgModule({
  declarations: [
    StickyFooterComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [StickyFooterComponent],
  providers: []
})
export class StickyFooterModule { }