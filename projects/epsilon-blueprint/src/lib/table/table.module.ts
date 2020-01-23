import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from './table.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { PaginationComponent } from './table-footer/pagination/pagination.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { SearchComponent } from './table-filters/search/search.component';
import { ColumnSelectorComponent } from './table-footer/column-selector/column-selector.component';
import { DisplayDensityComponent } from './table-footer/display-density/display-density.component';
import { ActionsComponent } from './table-body/table-columns/actions/actions.component';

@NgModule({
  declarations: [
    TableComponent,
    TableBodyComponent,
    PaginationComponent,
    TableFooterComponent,
    SearchComponent,
    DisplayDensityComponent,
    ColumnSelectorComponent,
    ActionsComponent
  ],
  imports: [CommonModule, FormsModule, NgSelectModule, RouterModule.forChild([])],
  exports: [TableComponent],
  providers: [],
  bootstrap: [TableComponent]
})
export class TableModule {}
