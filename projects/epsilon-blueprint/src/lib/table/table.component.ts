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

  // Defaults
  propertyDefaults = {
    search:  {
      hasSearch: true
    },
    sort: {
      defaultSortOrder: 'ascending'
    },
    hasSelectableRows: false,
    hasColumnSelector: true,
    hasDisplayDensity: true,
    pagination: {
      hasPagination: true
    },
    internationalization: {
      'Select all rows': 'Select all rows',
      'Actions': 'Actions',
      'Loading data': 'Loading data',
      'No data': 'No data available',
      'Select Row': 'Select Row',
      'Actions Menu': 'Actions Menu',
      'Column Selector': 'Column Selector:',
      'Default': '(Default)',
      'Showing numVisible out of numTotal': 'Showing #{numVisible} out of #{numTotal}',
      'Display Density': 'Display Density:',
      'numResults results': '#{numResults} result(s)', 
      'Number of Rows': 'Number of Rows per Page',
      'First Page': 'First Page',
      'Previous Page': 'Previous Page',
      'Next Page': 'Next Page',
      'Last Page': 'Last Page',
      'Display Density Options': {
        'Comfortable': 'Comfortable',
        'Compact': 'Compact'
      },
      'Number Of Rows Options': [
        { optionText: '10 rows', optionValue: 10 },
        { optionText: '25 rows', optionValue: 25 },
        { optionText: '50 rows', optionValue: 50 },
        { optionText: '100 rows', optionValue: 100 }
      ]
    }
  };

  columnDefaults = {
    isColumnDisplayed: true,
    isSortable: true
  }

  // Data
  filteredData = [];
  tableData = [];

  // Select All Rows
  isSelectAllChecked = false;
  isSelectAllIndeterminate = false;

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
    // Set defaults
    this.properties = Object.assign(this.propertyDefaults, this.properties);
    this.properties.columns = this.properties.columns.map(column => Object.assign({...this.columnDefaults}, column));

    // LocalStorage
    const displayDensityName =
      localStorage.getItem('selectedDensity') || 'Comfortable';
    this.setDisplayDensity(displayDensityName);
    this.sortColumnName = this.properties.sort.defaultSortedColumn;

    // Input Validations
    this.properties.columns.forEach(col => {
      if (!col.key && col.type !== ColumnType.TEMPLATE) {
        let err = new Error(`Missing 'key' property in\n${JSON.stringify(col)}`);
        err.name = 'Missing Input';
        throw err;
      }
      if (col.link && !(col.link.element === 'a' || col.link.element === 'button')) {
        let err = new Error(`Link element must be either 'a' or 'button' in\n${JSON.stringify(col)}`);
        err.name = 'Invalid Input';
        throw err;
      }
      if (col.link && col.link.element === 'a' && !(col.link.path || col.link.href)) {
        let err = new Error(`Link must have either href or path when element is 'a' in\n${JSON.stringify(col)}`);
        err.name = 'Missing Input';
        throw err;
      }
      if (col.link && col.link.element === 'button' && !col.link.action) {
        let err = new Error(`Link must have action when element is 'button' in\n${JSON.stringify(col)}`);
        err.name = 'Missing Input';
        throw err;
      }
    });

    // TODO: Figure out local storage issues
    /* if (localStorage.getItem('columns')) {
      this.properties.columns = JSON.parse(localStorage.getItem('columns'));
    } */
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
      this.defaultSort();
      this.paginate({
        currentPage: this.currentPage,
        numberOfRows: this.defaultNumberOfRows
      });
    }
  }

  // --------------- Sorting ---------------

  defaultSort() {
    this.sortOrder = this.properties.sort.defaultSortOrder;
    this.sortColumnName = this.properties.sort.defaultSortedColumn;

    this.sortOrder === 'ascending'
    ? this.ascSort(this.sortColumnName)
    : this.descSort(this.sortColumnName);
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

  getAriaSortOrder(index: number): string {
    if (!this.sortColumnName) {
      this.sortColumnName = this.properties.sort.defaultSortedColumn;
    }
    if (!this.columnIndex) {
      this.columnIndex = this.properties.columns.findIndex(
        (item, i: any) => {
          if (item.key === this.sortColumnName) {
            return i;
          }
        }
      );
    }
    if (this.columnIndex === index) {
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
    const selectedRow = this.filteredData.find(
      data => data.id === Number(event.target.id)
    );
    selectedRow.checked = event.target.checked;
    const selectedRowsCount = this.filteredData
      .filter(data => data.checked)
      .length;
    
    if (selectedRowsCount === this.filteredData.length) {
      this.isSelectAllIndeterminate = false;
      this.isSelectAllChecked = true;
    } else if (
      selectedRowsCount > 0 &&
      selectedRowsCount < this.filteredData.length
    ) {
      this.isSelectAllIndeterminate = true;
      this.isSelectAllChecked = false;
    } else if (selectedRowsCount === 0) {
      this.isSelectAllIndeterminate = false;
      this.isSelectAllChecked = false;
    }
    this.emitSelectedRowsAction();
  }

  // To select/deselect all the rows
  onSelectAllRows(event) {
    this.isSelectAllChecked = !this.isSelectAllChecked;
    this.isSelectAllIndeterminate = false;
    this.filteredData.forEach(row => {
      row.checked = this.isSelectAllChecked;
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

    this.selectedRowsAction.emit(selectedRowsIds);
  }
}
