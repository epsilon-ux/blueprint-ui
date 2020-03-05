import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: ComponentLibraryComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },

    { path: 'badge', loadChildren: () => import('./library/badge/badge.module')
      .then(m => m.BadgeLibraryModule) },

    { path: 'buttons-links', loadChildren: () => import('./library/action/action.module')
      .then(m => m.ActionLibraryModule) },

    { path: 'checkbox', loadChildren: () => import('./library/checkbox/checkbox.module')
      .then(m => m.CheckboxLibraryModule) },

    { path: 'landing-page-header', loadChildren: () => import('./library/landing-page-header/landing-page-header.module')
      .then(m => m.LandingPageHeaderLibraryModule) },

    { path: 'search', loadChildren: () => import('./library/search/search.module')
      .then(m => m.SearchLibraryModule) },

    { path: 'table', loadChildren: () => import('./library/table/table.module')
      .then(m => m.TableLibraryModule) },

    { path: 'toggletip', loadChildren: () => import('./library/toggletip/toggletip.module')
      .then(m => m.ToggletipLibraryModule) },

    { path: 'nav-secondary', loadChildren: () => import('./library/nav-secondary/nav-secondary.module')
      .then(m => m.NavSecondaryLibraryModule) },

    { path: '**', redirectTo: 'overview', pathMatch: 'full' } // TODO: create a componentNotFound page for this instance
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }