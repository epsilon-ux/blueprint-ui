import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: ComponentLibraryComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },

    { path: 'landing-page-header', loadChildren: () => import('./library/landing-page-header/landing-page-header.module')
      .then(m => m.LandingPageHeaderLibraryModule) },

    { path: 'search', loadChildren: () => import('./library/search/search.module')
      .then(m => m.SearchLibraryModule) },

    { path: 'table', loadChildren: () => import('./library/table/table.module')
      .then(m => m.TableLibraryModule) },

    { path: '**', redirectTo: 'overview', pathMatch: 'full' } // TODO: create a componentNotFound page for this instance
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }