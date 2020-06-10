// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { TableFiltersRoutingModule } from './table-filters-routing.module';
// import { TableFiltersComponent } from './table-filters.component';
// import { OverviewComponent } from './overview/overview.component';
// import { UsageComponent } from './usage/usage.component';


// @NgModule({
//   declarations: [TableFiltersComponent, OverviewComponent, UsageComponent],
//   imports: [
//     CommonModule,
//     TableFiltersRoutingModule
//   ]
// })
// export class TableFiltersModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { LandingPageHeaderModule } from 'epsilon-blueprint';
import { SearchModule } from 'epsilon-blueprint';
import { MultiselectModule } from 'epsilon-blueprint';
import { ActionModule } from 'epsilon-blueprint';
import { ToggleModule } from 'epsilon-blueprint';
import { TableFiltersRoutingModule } from './table-filters-routing.module';

import { TableFiltersComponent } from './table-filters.component';
import { OverviewComponent } from './overview/overview.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    TableFiltersComponent, 
    OverviewComponent, 
    UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    NgSelectModule, 
    TableFiltersRoutingModule,
    LandingPageHeaderModule,
    SearchModule,
    MultiselectModule,
    ActionModule,
    ToggleModule
  ],
  providers: [],
  exports: [TableFiltersComponent]
})
export class TableFiltersModule { }