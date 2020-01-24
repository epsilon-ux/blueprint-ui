import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DummyObjectComponent } from './components/table/dummy-object/dummy-object.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryDocsComponent } from './library-docs/library-docs.component';

const routes: Routes = [
  { path: '', component: LibraryDocsComponent },

  { path: 'component/table', component: TableComponent },
  { path: 'component/table/object/:id', component: DummyObjectComponent },
  { path: 'component/table/object/edit/:id', component: DummyObjectComponent },

  { path: 'component/search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
