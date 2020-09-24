import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { UsageComponent } from './usage/usage.component';
import { DropdownModule } from 'epsilon-blueprint';

@NgModule({
  declarations: [
    DropdownComponent,
    OverviewComponent,
    ApiComponent,
    UsageComponent
  ],
  imports: [CommonModule, DropdownRoutingModule, ComponentHeaderModule, DropdownModule, MarkdownModule.forChild()]
})
export class DropdownLibraryModule { }