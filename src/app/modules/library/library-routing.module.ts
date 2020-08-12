import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', component: LibraryComponent, children: [
    { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent, pathMatch: 'full' },

    // Foundations
    { path: 'foundations', children: [
      { path: 'voice-tone', loadChildren: () => import('./foundations/voice-tone/voice-tone.module')
        .then(m => m.VoiceToneModule) },

      { path: 'color', loadChildren: () => import('./foundations/color/color.module')
        .then(m => m.ColorModule) },

      { path: 'typography', loadChildren: () => import('./foundations/typography/typography.module')
        .then(m => m.TypographyModule) },

      { path: 'icons', loadChildren: () => import('./foundations/icons/icons.module')
        .then(m => m.IconsModule) }
    ] },

    // Components
    { path: 'components', children: [
      { path: 'badge', loadChildren: () => import('./components/badge/badge.module')
        .then(m => m.BadgeLibraryModule) },

      { path: 'breadcrumbs', loadChildren: () => import('./components/breadcrumbs/breadcrumbs.module')
        .then(m => m.BreadcrumbsLibraryModule) },

      { path: 'buttons-links', loadChildren: () => import('./components/action/action.module')
        .then(m => m.ActionLibraryModule) },

      { path: 'checkbox', loadChildren: () => import('./components/checkbox/checkbox.module')
        .then(m => m.CheckboxLibraryModule) },

      { path: 'collapsible-panel', loadChildren: () => import('./components/collapsible-panel/collapsible-panel.module')
        .then(m => m.CollapsiblePanelLibraryModule) },

      { path: 'date-time-picker', loadChildren: () => import('./components/date-time-picker/date-time-picker.module')
        .then(m => m.DateTimePickerLibraryModule) },

      { path: 'dropdown', loadChildren: () => import('./components/dropdown/dropdown.module')
        .then(m => m.DropdownLibraryModule) },

      { path: 'landing-page-header',
        loadChildren: () => import('./components/landing-page-header/landing-page-header.module')
          .then(m => m.LandingPageHeaderLibraryModule) },

      { path: 'loading-indicator',
        loadChildren: () => import('./components/loading-indicator/loading-indicator.module')
          .then(m => m.LoadingIndicatorLibraryModule) },

      { path: 'multi-select', loadChildren: () => import('./components/multi-select/multi-select.module')
        .then(m => m.MultiselectLibraryModule) },

      { path: 'nav-secondary', loadChildren: () => import('./components/nav-secondary/nav-secondary.module')
        .then(m => m.NavSecondaryLibraryModule) },

      { path: 'pagination', loadChildren: () => import('./components/pagination/pagination.module')
        .then(m => m.PaginationLibraryModule) },

      { path: 'panel', loadChildren: () => import('./components/panel/panel.module')
        .then(m => m.PanelLibraryModule) },

      { path: 'progress-bar', loadChildren: () => import('./components/progress-bar/progress-bar.module')
        .then(m => m.ProgressBarLibraryModule) },

      { path: 'radio-button', loadChildren: () => import('./components/radio-button/radio-button.module')
        .then(m => m.RadioButtonLibraryModule) },

      { path: 'ribbon', loadChildren: () => import('./components/ribbon/ribbon.module')
        .then(m => m.RibbonLibraryModule) },

      { path: 'search', loadChildren: () => import('./components/search/search.module')
        .then(m => m.SearchLibraryModule) },

      { path: 'table', loadChildren: () => import('./components/table/table.module')
        .then(m => m.TableLibraryModule) },

      { path: 'tile', loadChildren: () => import('./components/tile/tile.module')
        .then(m => m.TileLibraryModule) },

      { path: 'toggle', loadChildren: () => import('./components/toggle/toggle.module')
        .then(m => m.ToggleLibraryModule) },

      { path: 'toggletip', loadChildren: () => import('./components/toggletip/toggletip.module')
        .then(m => m.ToggletipLibraryModule) }
    ] },

    // Templates
    { path: 'templates', children: [
      { path: 'object-page-header',
        loadChildren: () => import('./templates/object-page-header/object-page-header.module')
          .then(m => m.ObjectPageHeaderModule) },

      { path: 'table-filters', loadChildren: () => import('./templates/table-filters/table-filters.module')
        .then(m => m.TableFiltersModule) }
    ] },

    // TODO: create a componentNotFound page for this instance
    { path: '**', redirectTo: 'introduction', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }