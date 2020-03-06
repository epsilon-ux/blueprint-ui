import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageHeaderModule } from 'epsilon-blueprint';

import { ComponentsRoutingModule } from './component-library-routing.module';
import { BaseTemplateModule } from 'src/app/shared/base-template/base-template.module';
import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';
import { VoiceToneComponent } from './library/voice-tone/voice-tone.component';
import { GrammarPunctuationComponent } from './library/voice-tone/grammar-punctuation/grammar-punctuation.component';
import { ContentGuidelinesComponent } from './library/voice-tone/content-guidelines/content-guidelines.component';
import { AccessibiltiyInternationalizationComponent } from './library/voice-tone/accessibiltiy-internationalization/accessibiltiy-internationalization.component';

@NgModule({
  declarations: [
    ComponentLibraryComponent,
    OverviewComponent,
    VoiceToneComponent,
    GrammarPunctuationComponent,
    ContentGuidelinesComponent,
    AccessibiltiyInternationalizationComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateModule,
    ComponentHeaderModule,
    ComponentsRoutingModule,
    LandingPageHeaderModule
  ],
  providers: [HttpClientModule],
  exports: [ComponentLibraryComponent]
})
export class ComponentLibraryModule { }
