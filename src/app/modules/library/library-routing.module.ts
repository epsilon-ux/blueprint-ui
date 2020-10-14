import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GeneralComponent } from './code-standards/general/general.component';
import { HtmlComponent } from './code-standards/html/html.component';
import { CssComponent } from './code-standards/css/css.component';
import { JavascriptComponent } from './code-standards/javascript/javascript.component';
import { AngularComponent } from './code-standards/angular/angular.component';
import { DevopsComponent } from './code-standards/devops/devops.component';

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

    // Code Standards
    { path: 'code-standards', children: [
      { path: 'general', component: GeneralComponent, pathMatch: 'full' },
      { path: 'html', component: HtmlComponent, pathMatch: 'full' },
      { path: 'css', component: CssComponent, pathMatch: 'full' },
      { path: 'javascript', component: JavascriptComponent, pathMatch: 'full' },
      { path: 'angular', component: AngularComponent, pathMatch: 'full' },
      { path: 'devops', component: DevopsComponent, pathMatch: 'full' },
    ] },

    // Components
    { path: 'components', children: [
      { path: 'badge', loadChildren: () => import('./components/badge/badge.module')
        .then(m => m.BadgeLibraryModule) },

      { path: 'breadcrumbs', loadChildren: () => import('./components/breadcrumbs/breadcrumbs.module')
        .then(m => m.BreadcrumbsLibraryModule) },

      { path: 'buttons-links', loadChildren: () => import('./components/action/action.module')
        .then(m => m.ActionLibraryModule) },

      { path: 'pie-chart', loadChildren: () => import('./components/chart-pie/chart-pie.module')
        .then(m => m.ChartPieLibraryModule) },

      { path: 'checkbox', loadChildren: () => import('./components/checkbox/checkbox.module')
        .then(m => m.CheckboxLibraryModule) },

      { path: 'collapsible-panel', loadChildren: () => import('./components/collapsible-panel/collapsible-panel.module')
        .then(m => m.CollapsiblePanelLibraryModule) },

      { path: 'date-time-picker', loadChildren: () => import('./components/date-time-picker/date-time-picker.module')
        .then(m => m.DateTimePickerLibraryModule) },

      { path: 'dropdown', loadChildren: () => import('./components/dropdown/dropdown.module')
        .then(m => m.DropdownLibraryModule) },

      { path: 'header', loadChildren: () => import('./components/header/header.module')
        .then(m => m.HeaderLibraryModule) },

      { path: 'landing-page-header',
        loadChildren: () => import('./components/landing-page-header/landing-page-header.module')
          .then(m => m.LandingPageHeaderLibraryModule) },

      { path: 'loading-indicator',
        loadChildren: () => import('./components/loading-indicator/loading-indicator.module')
          .then(m => m.LoadingIndicatorLibraryModule) },

      { path: 'logo', loadChildren: () => import('./components/logo/logo.module')
        .then(m => m.LogoLibraryModule) },

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

      { path: 'select', loadChildren: () => import('./components/select/select.module')
        .then(m => m.SelectLibraryModule) },

      { path: 'status-indicator', loadChildren: () => import('./components/status-indicator/status-indicator.module')
        .then(m => m.StatusIndicatorLibraryModule) },

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

      { path: 'nav-primary', loadChildren: () => import('./templates/nav-primary/nav-primary.module')
        .then(m => m.NavPrimaryModule) },

      { path: 'table-filters', loadChildren: () => import('./templates/table-filters/table-filters.module')
        .then(m => m.TableFiltersModule) }
    ] },

    // TODO: create a componentNotFound page for this instance
    { path: '**', redirectTo: 'introduction' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }