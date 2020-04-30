import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MultiselectComponent, NgMultiLabelTemplateDirective } from './multiselect.component';

@NgModule({
  declarations: [MultiselectComponent, NgMultiLabelTemplateDirective],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [MultiselectComponent, NgMultiLabelTemplateDirective]
})
export class MultiselectModule { }
