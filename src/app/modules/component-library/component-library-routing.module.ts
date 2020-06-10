import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentLibraryComponent } from './component-library.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', component: ComponentLibraryComponent, children: [
    { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent, pathMatch: 'full' },

    // Foundations
    { path: 'voice-tone', loadChildren: () => import('./foundations/voice-tone/voice-tone.module')
    .then(m => m.VoiceToneModule) },

    { path: 'color', loadChildren: () => import('./foundations/color/color.module')
    .then(m => m.ColorModule) },

    { path: 'typography', loadChildren: () => import('./foundations/typography/typography.module')
    .then(m => m.TypographyModule) },

    { path: 'icons', loadChildren: () => import('./foundations/icons/icons.module')
    .then(m => m.IconsModule) },

    // Small components
    { path: 'badge', loadChildren: () => import('./library/badge/badge.module')
      .then(m => m.BadgeLibraryModule) },

    { path: 'buttons-links', loadChildren: () => import('./library/action/action.module')
      .then(m => m.ActionLibraryModule) },

    { path: 'checkbox', loadChildren: () => import('./library/checkbox/checkbox.module')
      .then(m => m.CheckboxLibraryModule) },
    
    { path: 'date-time-picker', loadChildren: () => import('./library/date-time-picker/date-time-picker.module')
    .then(m => m.DateTimePickerLibraryModule) },
    
    { path: 'dropdown', loadChildren: () => import('./library/dropdown/dropdown.module')
    .then(m => m.DropdownLibraryModule) },

    { path: 'pagination', loadChildren: () => import('./library/pagination/pagination.module')
      .then(m => m.PaginationLibraryModule) },

    { path: 'panel', loadChildren: () => import('./library/panel/panel.module')
      .then(m => m.PanelLibraryModule) },

    { path: 'radio-button', loadChildren: () => import('./library/radio-button/radio-button.module')
      .then(m => m.RadioButtonLibraryModule) },

    { path: 'ribbon', loadChildren: () => import('./library/ribbon/ribbon.module')
      .then(m => m.RibbonLibraryModule) },

    { path: 'search', loadChildren: () => import('./library/search/search.module')
      .then(m => m.SearchLibraryModule) },

    { path: 'tile', loadChildren: () => import('./library/tile/tile.module')
      .then(m => m.TileLibraryModule) },

    { path: 'toggle', loadChildren: () => import('./library/toggle/toggle.module')
      .then(m => m.ToggleLibraryModule) },

    { path: 'toggletip', loadChildren: () => import('./library/toggletip/toggletip.module')
      .then(m => m.ToggletipLibraryModule) },

    // Medium components
    { path: 'landing-page-header', loadChildren: () => import('./library/landing-page-header/landing-page-header.module')
    .then(m => m.LandingPageHeaderLibraryModule) },

    { path: 'multi-select', loadChildren: () => import('./library/multi-select/multi-select.module')
      .then(m => m.MultiselectLibraryModule) },

    { path: 'nav-secondary', loadChildren: () => import('./library/nav-secondary/nav-secondary.module')
      .then(m => m.NavSecondaryLibraryModule) },

    // Large components
    { path: 'table', loadChildren: () => import('./library/table/table.module')
    .then(m => m.TableLibraryModule) },

    // Templates
    { path: 'object-page-header', loadChildren: () => import('./templates/object-page-header/object-page-header.module')
    .then(m => m.ObjectPageHeaderModule) },

    { path: 'color', loadChildren: () => import('./foundations/color/color.module')
    .then(m => m.ColorModule) },

    { path: '**', redirectTo: 'introduction', pathMatch: 'full' } // TODO: create a componentNotFound page for this instance
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }