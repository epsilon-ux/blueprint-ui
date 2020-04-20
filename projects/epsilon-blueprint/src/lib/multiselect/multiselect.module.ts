import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MultiselectComponent } from './multiselect.component';

@NgModule({
  declarations: [MultiselectComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [MultiselectComponent]
})
export class MultiselectModule { }
