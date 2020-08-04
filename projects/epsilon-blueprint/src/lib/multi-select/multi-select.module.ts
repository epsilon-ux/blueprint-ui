import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  MultiselectComponent, NgMultiLabelTemplateDirective, NgOptionTemplateDirective
} from './multi-select.component';

@NgModule({
  declarations: [MultiselectComponent, NgMultiLabelTemplateDirective, NgOptionTemplateDirective],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [MultiselectComponent, NgMultiLabelTemplateDirective, NgOptionTemplateDirective]
})
export class MultiselectModule { }