import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ActionModule } from '../action/action.module';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ActionModule,
    LogoModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }