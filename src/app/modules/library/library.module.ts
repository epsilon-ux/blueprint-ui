import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { LandingPageHeaderModule } from 'epsilon-blueprint';

import { LibraryRoutingModule } from './library-routing.module';
import { BaseTemplateModule } from 'src/app/shared/base-template/base-template.module';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { LibraryComponent } from './library.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GeneralComponent } from './code-standards/general/general.component';
import { HtmlComponent } from './code-standards/html/html.component';
import { CssComponent } from './code-standards/css/css.component';
import { JavascriptComponent } from './code-standards/javascript/javascript.component';
import { AngularComponent } from './code-standards/angular/angular.component';
import { DevopsComponent } from './code-standards/devops/devops.component';

@NgModule({
  declarations: [
    LibraryComponent,
    IntroductionComponent,
    GeneralComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    AngularComponent,
    DevopsComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateModule,
    ComponentHeaderModule,
    LibraryRoutingModule,
    LandingPageHeaderModule,
    MarkdownModule.forChild()
  ],
  providers: [HttpClientModule],
  exports: [LibraryComponent]
})
export class LibraryModule { }