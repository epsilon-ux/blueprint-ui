import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons.component';
import { OverviewComponent } from './overview/overview.component';
import { IconLibraryComponent } from './icon-library/icon-library.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  { path: '', component: IconsComponent, children: [
    // TODO: swap icon-library to overview when overview is added
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent, pathMatch: 'full' },
    { path: 'icon-library', component: IconLibraryComponent, pathMatch: 'full' },
    { path: 'usage', component: UsageComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }