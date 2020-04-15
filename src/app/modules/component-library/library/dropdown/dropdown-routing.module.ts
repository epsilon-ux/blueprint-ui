import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ApiComponent } from './api/api.component';
import { DropdownComponent } from './dropdown.component';

const routes: Routes = [
  { path: '', component: DropdownComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },
    { path: 'usage', component: UsageComponent, pathMatch: 'full' },
    { path: 'playground', component: PlaygroundComponent, pathMatch: 'full' },
    { path: 'api', component: ApiComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule { }
