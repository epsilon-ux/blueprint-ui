import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './modules/components/components.component';

const routes: Routes = [
  { path: 'components', loadChildren: () => import('./modules/components/components.module')
  .then(m => m.ComponentsModule) },
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: '**', component: ComponentsComponent } // TODO: create a componentNotFound page for this instance?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
