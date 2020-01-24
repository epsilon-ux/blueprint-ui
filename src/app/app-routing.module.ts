import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DummyObjectComponent } from './components/table/dummy-object/dummy-object.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'table/object/:id', component: DummyObjectComponent },
  { path: 'table/object/edit/:id', component: DummyObjectComponent },
  
  { path: 'search', component: SearchComponent },
  
  { path: '', redirectTo: 'table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
