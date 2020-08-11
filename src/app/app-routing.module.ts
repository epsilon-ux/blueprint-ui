import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './modules/library/library.component';

const routes: Routes = [
  { path: 'library', loadChildren: () => import('./modules/library/library.module')
    .then(m => m.LibraryModule) },
  { path: '', pathMatch: 'full', redirectTo: 'library' },
  { path: '**', component: LibraryComponent } // TODO: create a pageNotFound page for this instance
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 60]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }