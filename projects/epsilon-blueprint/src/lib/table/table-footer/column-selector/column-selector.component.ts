import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-selector',
  templateUrl: './column-selector.component.html',
  styleUrls: ['../table-footer.component.scss']
})
export class ColumnSelectorComponent implements OnInit {
  @Input() columnInfo = [];
  @Input() defaultSortColumnName: string;
  @Input() showColumnSelector = false;

  selectedColumns = [];

  constructor() {}

  ngOnInit() {
    this.columnInfo.filter(
      d => d.key === this.defaultSortColumnName
    )[0].disabled = true;
    this.selectedColumns = Array.from(
      this.columnInfo.filter(column => column.isColumnDisplayed),
      filtered => filtered.key
    );
    this.updateSelected(this.selectedColumns);
  }

  updateSelected(e) {
    if (Array.isArray(e)) {
      this.columnInfo.forEach(column => {
        column.isColumnDisplayed = this.selectedColumns.includes(column.key)
          ? true
          : false;
      });
      localStorage.setItem('thead', JSON.stringify(this.columnInfo));
    }
  }
}
