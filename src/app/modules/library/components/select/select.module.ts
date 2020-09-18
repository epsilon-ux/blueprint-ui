import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { SelectRoutingModule } from './select-routing.module';

import { SelectComponent } from './select.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    SelectComponent,
    OverviewComponent,
    UsageComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    ComponentHeaderModule,
    SelectRoutingModule,
    MarkdownModule
  ],
  providers: [],
  exports: [SelectComponent]
})
export class SelectLibraryModule { }