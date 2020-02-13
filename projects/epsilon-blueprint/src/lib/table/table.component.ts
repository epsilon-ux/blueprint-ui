import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Column, ColumnType } from './models/column';
import Properties from './models/properties';
import { parseLookupString } from './helpers';

@Component({
  selector: 'bp-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: {
    [key: string]: any;
  }[];
  @Input() isDataLoading: boolean;
  @Input() properties: Properties;

  @Output() action = new EventEmitter();
  @Output() selectedRowsAction = new EventEmitter();

  // Data
  filteredData = [];
  tableData = [];

  // Sorting
  sortColumnName: string;
  columnIndex: number;
  sortOrder = 'ascending';
  isSortActive = true;

  // Pagination
  startIndex: number;
  endIndex: number;
  totalRecords: number;
  numberOfRows;
  currentPage = 1;
  pageBuffer = 1;
  defaultNumberOfRows = 10;

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  // displayDensity
  densityClass: string;

  showSelectedRowsAction = false;
  @ViewChild('selectAllRowsRef', { static: false })
  selectAllRowsRef: ElementRef;

  // Used for pagination
  pageData: {
    currentPage: number;
    numberOfRows: number;
  };

  constructor() {}

  // column type
  get columnType() {
    return ColumnType;
  }

  ngOnInit() {
    const displayDensityName =
      localStorage.getItem('selectedDensity') || 'Comfortable';
    this.setDisplayDensity(displayDensityName);
    this.sortColumnName = this.properties.sort.defaultSortedColumn;

    if (localStorage.getItem('columns')) {
      this.properties.columns = JSON.parse(localStorage.getItem('columns'));
    }
  }

  ngOnChanges(changes) {
    if (
      (changes.isDataLoading &&
      changes.isDataLoading.currentValue === false &&
      this.data.length > 0) ||
      (changes.data && !changes.data.firstChange)
    ) {
      this.data = changes.data.currentValue;
      if (this.properties.hasSelectableRows) {
        this.data.forEach(row => {
          row.checked = false;
        });
      }
      this.filteredData = [...this.data];
      this.totalRecords = this.data.length;
      this.paginate({
        currentPage: this.currentPage,
        numberOfRows: this.defaultNumberOfRows
      });
      this.defaultSort();
    }
  }

  // --------------- Sorting ---------------

  defaultSort() {
    this.ascSort(this.properties.sort.defaultSortedColumn);
  }

  ascSort(colHeader: string) {
    this.sortByKeyAsc(this.filteredData, colHeader);
  }

  descSort(colHeader: string) {
    this.sortByKeyDesc(this.filteredData, colHeader);
  }

  sortByKeyAsc(array, key) {
    return array.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x < y ? -1 : 1;
    });
  }

  sortByKeyDesc(array, key) {
    return array.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x > y ? -1 : 1;
    });
  }

  getAriaSortOrder(rowIndex: number): string {
    const columnIndex = this.properties.columns.findIndex(
      (item: { key: string }, index: any) => {
        if (item.key === this.sortColumnName) {
          return index;
        }
      }
    );
    if (columnIndex === rowIndex) {
      return 'ascending';
    }
    if (this.columnIndex === rowIndex) {
      this.isSortActive = true;
      return this.sortOrder;
    } else {
      return null;
    }
  }

  applySort(colHeader: string, columnIndex: number) {
    this.columnIndex = columnIndex;
    if (
      (this.sortColumnName !== colHeader &&
        typeof this.sortOrder !== undefined) ||
      this.sortOrder === '' ||
      this.sortOrder === 'descending'
    ) {
      this.ascSort(colHeader);
      this.isSortActive = true;
      this.sortOrder = 'ascending';
      this.sortColumnName = colHeader;
    } else {
      this.descSort(colHeader);
      this.isSortActive = true;
      this.sortOrder = 'descending';
      this.sortColumnName = '';
    }
    this.paginate({
      currentPage: this.currentPage,
      numberOfRows: this.numberOfRows
    });
  }

  // --------------- Searching ---------------

  search(query) {
    this.filteredData = this.data.filter(d => {
      for (const col of this.properties.columns) {
        if (
          d[col.key] &&
          String(d[col.key])
            .toLowerCase()
            .includes(query.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
    this.totalRecords = this.filteredData.length;
    this.paginate({ currentPage: 1, numberOfRows: this.numberOfRows });
  }

  clearSearch() {
    this.filteredData = [...this.data];
    this.totalRecords = this.filteredData.length;
    this.paginate({ currentPage: 1, numberOfRows: this.numberOfRows });
    this.defaultSort();
  }

  // --------------- Pagination ---------------

  paginate(pageData: { currentPage: number; numberOfRows: number }) {
    this.pageData = pageData;
    if (pageData.numberOfRows !== this.numberOfRows) {
      this.currentPage =
        Math.floor(this.startIndex / pageData.numberOfRows) + 1 || 1;
    } else {
      this.currentPage = pageData.currentPage;
    }
    this.numberOfRows = pageData.numberOfRows;
    this.startIndex = (this.currentPage - 1) * this.numberOfRows;
    this.endIndex = this.startIndex + this.numberOfRows;
    this.tableData = this.filteredData.slice(this.startIndex, this.endIndex);
  }

  // To select/unselect one row at a time
  onSelectRow(event) {
    const selectAllCheckbox = this.selectAllRowsRef.nativeElement;
    const selectedRow = this.filteredData.find(
      data => data.id === Number(event.target.id)
    );
    selectedRow.checked = event.target.checked;
    const selectedRowsCount = this.filteredData
      .filter(data => data.checked)
      .length;
    
    if (selectedRowsCount === this.filteredData.length) {
      selectAllCheckbox.indeterminate = false;
      selectAllCheckbox.checked = true;
    } else if (
      selectedRowsCount > 0 &&
      selectedRowsCount < this.filteredData.length
    ) {
      selectAllCheckbox.indeterminate = true;
      selectAllCheckbox.checked = true;
    } else if (selectedRowsCount === 0) {
      selectAllCheckbox.indeterminate = false;
      selectAllCheckbox.checked = false;
    }
    this.emitSelectedRowsAction();
  }

  // To select/deselect all the rows
  onSelectAllRows(event) {
    this.filteredData.forEach(row => {
      row.checked = event.target.checked;
    });
    this.emitSelectedRowsAction();
  }

  // --------------- DisplayDensity ---------------

  setDisplayDensity(density) {
    this.densityClass = density === 'Comfortable' ? null : 'table-compact';
    localStorage.setItem('selectedDensity', density);
  }

  // --------------- Actions ---------------

  emitAction(action: string) {
    this.action.emit(action);
  }

  // To perform an action on selected rows
  emitSelectedRowsAction() {
    const selectedRowsIds = [];
    this.filteredData.forEach(data => {
      if (data.checked) {
        selectedRowsIds.push(data[this.properties.rowId]);
      }
    });

    this.selectedRowsAction.emit({
      selectedRowsIds
    });
  }
}
