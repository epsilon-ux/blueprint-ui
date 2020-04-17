import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MultiselectComponent } from './multiselect.component';

@NgModule({
  declarations: [MultiselectComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MultiselectComponent]
})
export class MultiselectModule { }
