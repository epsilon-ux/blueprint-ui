import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavPrimaryComponent } from './nav-primary.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  { path: '', component: NavPrimaryComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },
    { path: 'usage', component: UsageComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavPrimaryRoutingModule { }