import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  { path: '', component: TypographyComponent, children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },
    // TODO: uncomment once mockup is added
    // { path: 'usage', component: UsageComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypographyRoutingModule { }