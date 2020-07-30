import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchModule } from '../search/search.module';
import { ActionModule } from '../action/action.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { MultiselectModule } from '../multi-select/multi-select.module';
import { TableComponent } from './table.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { ColumnSelectorComponent } from './table-footer/column-selector/column-selector.component';
import { DisplayDensityComponent } from './table-footer/display-density/display-density.component';
import { ViewSelectorComponent } from './table-footer/view-selector/view-selector.component';
import { ActionsComponent } from './table-body/table-columns/actions/actions.component';
import { SelectAllCheckboxComponent } from './select-all-checkbox/select-all-checkbox.component';

@NgModule({
  declarations: [
    TableComponent,
    TableBodyComponent,
    TableFooterComponent,
    DisplayDensityComponent,
    ColumnSelectorComponent,
    ViewSelectorComponent,
    ActionsComponent,
    SelectAllCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    SearchModule,
    ActionModule,
    CheckboxModule,
    MultiselectModule,
    RouterModule.forChild([])
  ],
  exports: [TableComponent],
  providers: []
})
export class TableModule { }