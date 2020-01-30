import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';
import { TableComponent } from './library/table/table.component';
import { DummyObjectComponent } from './library/table/dummy-object/dummy-object.component';
import { SearchComponent } from './library/search/search.component';


const routes: Routes = [
  { path: '', component: ComponentLibraryComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },

    { path: 'landing-page-header', loadChildren: () => import('./library/landing-page-header/landing-page-header.module')
      .then(m => m.LandingPageHeaderLibraryModule) },

    { path: 'table', component: TableComponent, pathMatch: 'full' },
    { path: 'table/object/:id', component: DummyObjectComponent },
    { path: 'table/object/edit/:id', component: DummyObjectComponent },
  
    { path: 'search', component: SearchComponent, pathMatch: 'full' },
    { path: 'search/docs', component: SearchComponent, pathMatch: 'full' },

    { path: '**', redirectTo: 'overview', pathMatch: 'full' } // TODO: create a componentNotFound page for this instance
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }