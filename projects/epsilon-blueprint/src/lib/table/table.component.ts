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
import { TableColumnType, TableColumnInterface, TablePropertiesInterface } from './table.interface';
import { parseLookupString, generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, OnChanges {

  @Input() data: {
    [key: string]: any;
  }[];
  @Input() dataLength: number;
  @Input() isDataLoading: boolean;
  @Input() properties: TablePropertiesInterface;

  @Output() action = new EventEmitter();
  @Output() onSort = new EventEmitter();
  @Output() rowSelected = new EventEmitter();
  @Output() viewChange = new EventEmitter();

  @ViewChild('selectAllRowsRef', { static: false })
  selectAllRowsRef: ElementRef;

  // Data
  tableData = [];

  rowSelectionStates: Map<Record<string, unknown>, boolean> = new Map();
  expandedRows = new Set();

  // Select All Rows
  isSelectAllChecked = false;
  isSelectAllIndeterminate = false;
  numRowsSelected = 0;
  areAllRowsSelected;

  // Sorting
  sortColumnKey: string;
  sortOrder: string;

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  uuid = 'table' + String(generateUniqueId());

  // displayDensity
  densityClass: string;

  constructor() { }

  ngOnInit(): void {
    // Defaults
    const propertyDefaults = {
      sort: {
        defaultSortOrder: 'ascending'
      },
      hasSelectableRows: false,
      hasViewSelector: false,
      hasColumnSelector: true,
      hasDisplayDensity: true,
      internationalization: {
        'Select all rows': 'Select all rows',
        'Actions': 'Actions',
        'Expand/Collapse': 'Expand/Collapse',
        'Loading data': 'Loading data',
        'No data': 'No data available',
        'Select Row': `Select Row #{${this.properties.rowId}}`,
        'Toggle Row': `Toggle Row #{${this.properties.rowId}}`,
        'Actions Menu': 'Actions Menu',
        'Column Selector': 'Column Selector:',
        'Default': '(Default)',
        'Showing numVisible out of numTotal': 'Showing #{numVisible} out of #{numTotal}',
        'Display Density': 'Display Density:',
        'Display Density Options': {
          'Comfortable': 'Comfortable',
          'Compact': 'Compact'
        },
        'View': 'View:',
        'View Options': {
          'Table': 'Table',
          'Alternate': 'List'
        }
      }
    };

    const columnDefaults = {
      isColumnDisplayed: true,
      isSortable: true
    };
    // Set defaults
    this.properties = Object.assign(
      propertyDefaults,
      this.properties
    );
    this.properties.columns = this.properties.columns.map(column =>
      Object.assign({ ...columnDefaults }, column)
    );

    this.sortOrder = this.properties.sort.defaultSortOrder;
    this.sortColumnKey = this.properties.sort.defaultSortedColumn;

    this.properties.columns.forEach((col, i) => col.columnIndex = i);

    // LocalStorage
    const displayDensityName
      = localStorage.getItem('selectedDensity') || 'Comfortable';
    this.setDisplayDensity(displayDensityName);

    // Input Validations
    this.properties.columns.forEach(col => {
      if (!col.key && col.type !== TableColumnType.TEMPLATE) {
        const err = new Error(
          `Missing 'key' property in\n${JSON.stringify(col)}`
        );
        err.name = 'Missing Input';
        throw err;
      }
      if (
        col.icon
        && !(col.icon.color === 'warning' || col.icon.color === 'midnight')
      ) {
        console.warn(
          `"${col.icon.color}" invalid value for bp-table icon column color: expects either "midnight" or "warning".`
        );
      }
      if (col.link) {
        if (col.link.path) {
          console.warn('Table link property "path" is deprecated. Use bpRouterLink instead.');
          if (!col.link.bpRouterLink) {
            col.link.bpRouterLink = col.link.path;
          }
        }
        if (col.link.element) {
          console.warn('Table link property "element" is deprecated. It is no longer needed.');
        }
      }
    });

    // TODO: Figure out local storage issues
    /* if (localStorage.getItem('columns')) {
      this.properties.columns = JSON.parse(localStorage.getItem('columns'));
    } */
  }

  ngOnChanges(changes): void {
    if (
      (changes.isDataLoading
        && changes.isDataLoading.currentValue === false
        && this.tableData.length > 0)
      || (changes.data && !changes.data.firstChange)
    ) {
      this.tableData = changes.data.currentValue;

      if (this.areAllRowsSelected) {
        this.tableData.forEach(d => {
          if (!this.rowSelectionStates.has(d)) {
            this.rowSelectionStates.set(d, true);
          }
        });
      }

      if (this.getPageSelectionSize() === 0) {
        this.isSelectAllChecked = false;
        this.isSelectAllIndeterminate = false;
      } else if (this.getPageSelectionSize() > 0 && this.getPageSelectionSize() < this.tableData.length) {
        this.isSelectAllChecked = false;
        this.isSelectAllIndeterminate = true;
      } else if (this.getPageSelectionSize() === this.tableData.length) {
        this.isSelectAllChecked = true;
        this.isSelectAllIndeterminate = false;
      }
    }
  }

  getColumn(key): TableColumnInterface {
    return this.properties.columns.filter(column => column.key === key)[0];
  }

  // --------------- Sorting ---------------

  defaultSort(): void {
    this.sortOrder = this.properties.sort.defaultSortOrder;
    this.sortColumnKey = this.properties.sort.defaultSortedColumn;
  }

  getAriaSortOrder(key: string): string {
    // Set aria attributes before data is loaded, but after column headers have rendered
    if (this.isDataLoading && key === this.sortColumnKey) {
      return this.properties.sort.defaultSortOrder;
    } else if (key === this.sortColumnKey) {
      // Set aria attributes after data is loaded
      return this.sortOrder;
    } else {
      return null;
    }
  }

  sort(colHeader: string): void {
    if (colHeader === this.sortColumnKey) {
      if (this.sortOrder === '' || this.sortOrder === 'descending') {
        this.sortOrder = 'ascending';
      } else {
        this.sortOrder = 'descending';
      }
    } else {
      this.sortColumnKey = colHeader;
      this.sortOrder = 'ascending';
    }
    this.onSort.emit({
      column: this.sortColumnKey,
      order: this.sortOrder
    });
  }

  // --------------- Selectable Rows ---------------

  getPageSelectionSize(): number {
    let size = 0;
    for (const row of this.tableData) {
      if (this.rowSelectionStates.get(row)) {
        size++;
      }
    }
    return size;
  }

  getSelectionSize(): number {
    let size = 0;
    this.rowSelectionStates.forEach(value => {
      if (value) {
        size++;
      }
    });
    return size;
  }

  // To select/unselect one row at a time
  onSelectRow(e): void {
    const event = e.event;
    const selectedRow = e.row;
    if (event.target.checked) {
      this.numRowsSelected++;
      this.rowSelectionStates.set(selectedRow, true);
      this.rowSelected.emit({
        selected: [selectedRow],
        unselected: [],
        numRowsSelected: this.numRowsSelected
      });
    } else {
      this.numRowsSelected--;
      this.rowSelectionStates.set(selectedRow, false);
      this.rowSelected.emit({
        selected: [],
        unselected: [selectedRow],
        numRowsSelected: this.numRowsSelected
      });
    }

    if (this.getSelectionSize() === this.dataLength || this.numRowsSelected === this.dataLength) {
      this.isSelectAllIndeterminate = false;
      this.isSelectAllChecked = true;
      this.areAllRowsSelected = true;
    } else if (
      this.getSelectionSize() > 0
      && this.getSelectionSize() < this.dataLength
    ) {
      this.isSelectAllIndeterminate = true;
      this.isSelectAllChecked = false;
    } else if (this.getSelectionSize() === 0) {
      this.isSelectAllIndeterminate = false;
      this.isSelectAllChecked = false;
    }
  }

  selectPage(): void {
    if (!this.isSelectAllChecked) {
      this.tableData.forEach(d => this.rowSelectionStates.set(d, true));
      this.numRowsSelected = this.rowSelectionStates.size;
      this.isSelectAllIndeterminate = false;
      this.isSelectAllChecked = true;
      this.rowSelected.emit({
        selected: this.tableData,
        unselected: [],
        numRowsSelected: this.numRowsSelected
      });
    } else if (this.isSelectAllChecked) {
      this.rowSelectionStates.clear();
      this.numRowsSelected = 0;
      this.isSelectAllIndeterminate = false;
      this.isSelectAllChecked = false;
      this.rowSelected.emit({
        selected: [],
        unselected: this.tableData,
        numRowsSelected: this.numRowsSelected
      });
    }
  }

  public selectAllRows(): void {
    this.isSelectAllChecked = true;
    this.isSelectAllIndeterminate = false;
    this.numRowsSelected = this.dataLength;
    this.tableData.forEach(d => this.rowSelectionStates.set(d, true));
    this.areAllRowsSelected = true;
  }

  public clearAllRows(): void {
    this.isSelectAllChecked = false;
    this.isSelectAllIndeterminate = false;
    this.numRowsSelected = 0;
    this.rowSelectionStates.clear();
    this.areAllRowsSelected = false;
  }

  // --------------- DisplayDensity ---------------

  setDisplayDensity(density): void {
    this.densityClass = density === 'Comfortable' ? null : 'table-compact';
    localStorage.setItem('selectedDensity', density);
  }

  // --------------- View Selector ---------------

  emitTableView(view): void {
    this.viewChange.emit(view);
  }

  // --------------- Actions ---------------

  emitAction(action: string): void {
    this.action.emit(action);
  }

}