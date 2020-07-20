import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoiceToneComponent } from './voice-tone.component';
import { OverviewComponent } from './overview/overview.component';
import { AccessibilityInternationalizationComponent } from './accessibility-internationalization/accessibility-internationalization.component';
import { ContentGuidelinesComponent } from './content-guidelines/content-guidelines.component';
import { GrammarPunctuationComponent } from './grammar-punctuation/grammar-punctuation.component';

const routes: Routes = [
  { path: '', component: VoiceToneComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },
    { path: 'accessibility-internationalization', component: AccessibilityInternationalizationComponent, pathMatch: 'full' },
    { path: 'content-guidelines', component: ContentGuidelinesComponent, pathMatch: 'full' },
    { path: 'grammar-punctuation', component: GrammarPunctuationComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceToneRoutingModule { }