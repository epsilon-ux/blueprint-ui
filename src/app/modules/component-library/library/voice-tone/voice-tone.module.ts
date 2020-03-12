import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VoiceToneLibraryModule } from 'epsilon-blueprint';

import { ComponentHeaderModule } from 'src/app/shared/component-header/component-header.module';
import { VoiceToneRountingModule } from './voice-tone-routing.module';

import { VoiceToneComponent } from './voice-tone.component';
import { OverviewComponent } from './overview/overview.component';
import { GrammarPunctuationComponent } from './grammar-punctuation/grammar-punctuation.component';
import { ContentGuidelinesComponent } from './content-guidelines/content-guidelines.component';
import { AccessibilityInternationalizationComponent } from './accessibility-internationalization/accessibility-internationalization.component';

@NgModule({
  declarations: [
    VoiceToneComponent,
    OverviewComponent,
    GrammarPunctuationComponent,
    ContentGuidelinesComponent,
    AccessibilityInternationalizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentHeaderModule,
    VoiceToneRountingModule,
    VoiceToneLibraryModule
  ],
  providers: [],
  exports: [VoiceToneComponent]
})
export class VoiceToneModule { }
