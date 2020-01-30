import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentLibraryComponent } from './component-library.component';
import { OverviewComponent } from './overview/overview.component';
import { TableComponent } from './library/table/table.component';
import { DummyObjectComponent } from './library/table/dummy-object/dummy-object.component';
import { SearchComponent } from './library/search/search.component';
import { LandingPageHeaderComponent } from './library/landing-page-header/landing-page-header.component';
import { SearchModule } from 'projects/epsilon-blueprint/src/public-api';


const routes: Routes = [
  { path: '', component: ComponentLibraryComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },

    { path: 'table', component: TableComponent, pathMatch: 'full' },
    { path: 'table/object/:id', component: DummyObjectComponent },
    { path: 'table/object/edit/:id', component: DummyObjectComponent },
  
    { path: 'search', component: SearchComponent, pathMatch: 'full' },
    { path: 'search/docs', component: SearchComponent, pathMatch: 'full' },

    { path: 'landing-page-header', component: LandingPageHeaderComponent, pathMatch: 'full' },
  ]},
  { path: '**', redirectTo: 'components', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }