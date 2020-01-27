import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { OverviewComponent } from './overview/overview.component';
import { TableComponent } from './library/table/table.component';
import { DummyObjectComponent } from './library/table/dummy-object/dummy-object.component';
import { SearchComponent } from './library/search/search.component';


const routes: Routes = [
  { path: '', component: ComponentsComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },

    { path: 'table', component: TableComponent },
    { path: 'table/object/:id', component: DummyObjectComponent },
    { path: 'table/object/edit/:id', component: DummyObjectComponent },
  
    { path: 'search', component: SearchComponent },
  ]},
  { path: '**', redirectTo: 'components', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }