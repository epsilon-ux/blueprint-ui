import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { LandingPageHeaderModule } from 'epsilon-blueprint';

import { ComponentsRoutingModule } from './component-library-routing.module';
import { BaseTemplateModule } from 'src/app/shared/base-template/base-template.module';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    ComponentLibraryComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateModule,
    ComponentHeaderModule,
    ComponentsRoutingModule,
    LandingPageHeaderModule,
    MarkdownModule.forChild()
  ],
  providers: [HttpClientModule],
  exports: [ComponentLibraryComponent]
})
export class ComponentLibraryModule { }
