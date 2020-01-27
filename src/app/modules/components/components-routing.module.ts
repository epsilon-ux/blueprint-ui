import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { DummyObjectComponent } from './table/dummy-object/dummy-object.component';
import { SearchComponent } from './search/search.component';
import { ComponentsComponent } from './components.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentsComponent },

  { path: 'table', component: TableComponent },
  { path: 'table/object/:id', component: DummyObjectComponent },
  { path: 'table/object/edit/:id', component: DummyObjectComponent },

  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }