import { Component, Input, OnInit } from '@angular/core';
import { parseLookupString } from '../../../../helpers';

@Component({
  selector: 'app-column-selector',
  templateUrl: './column-selector.component.html',
  styleUrls: ['../table-footer.component.scss']
})
export class ColumnSelectorComponent implements OnInit {
  
  @Input()
  columnInfo = [];

  @Input()
  defaultSortColumnName: string;

  @Input()
  internationalization: any;
  
  selectedColumns = [];

  parseLookupString = parseLookupString;

  constructor() {}

  ngOnInit() {
    this.columnInfo.filter(
      d => d.key === this.defaultSortColumnName
    )[0].disabled = true;
    this.selectedColumns = Array.from(
      this.columnInfo.filter(column => column.isColumnDisplayed),
      filtered => filtered.columnIndex
    );
    this.updateSelected(this.selectedColumns);
  }

  updateSelected(e) {
    this.selectedColumns = e;
    if (Array.isArray(e)) {
      this.columnInfo.forEach(column => {
        column.isColumnDisplayed = this.selectedColumns.includes(column.columnIndex)
          ? true
          : false;
      });
      // TODO: Figure out local storage issues
      // 1. What if there are multiple tables in the application
      // 2. How can we store only the information we need (visible columns)
      //localStorage.setItem('columns', JSON.stringify(this.columnInfo));
    }
  }
}
