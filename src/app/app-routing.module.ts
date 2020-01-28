import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLibraryComponent } from './modules/component-library/component-library.component';

const routes: Routes = [
  { path: 'components', loadChildren: () => import('./modules/component-library/component-library.module')
  .then(m => m.ComponentLibraryModule) },
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: '**', component: ComponentLibraryComponent } // TODO: create a componentNotFound page for this instance
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
