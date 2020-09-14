import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ActionModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }