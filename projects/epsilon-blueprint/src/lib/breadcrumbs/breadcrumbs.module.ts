import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ActionModule
  ],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule { }