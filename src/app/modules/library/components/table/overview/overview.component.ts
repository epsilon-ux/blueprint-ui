import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent, TableColumnType, TablePropertiesInterface } from 'epsilon-blueprint';

import { TableRow } from './tableData.interface';
import tableData from 'src/app/datasets/tableData.json';

interface IndicesInterface {
  start: number;
  end: number;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  @ViewChild('overviewTable', { static: true }) overviewTable: TableComponent;
  @ViewChild('templateColumn', { static: true }) templateColumn;
  @ViewChild('expandableRowsTemplate', { static: true }) expandableRowsTemplate;

  set exampleData(json: { customerData: { data } }) {
    this.rawData = json.customerData.data;
    this.filteredData = json.customerData.data;
    this.tableData = this.filteredData.slice(0, 10);
    this.isDataLoading = false;
  }

  rawData: TableRow[];
  filteredData: TableRow[];
  tableData: TableRow[];
  pageIndices: IndicesInterface;
  isDataLoading = true;

  properties: TablePropertiesInterface;

  constructor() { }

  ngOnInit(): void {
    this.properties = {
      caption: 'This is an example of a table with all available table features turned on.',
      rowId: 'id',
      columns: [
        {
          key: 'date',
          headerText: 'Date',
          isColumnDisplayed: true
        },
        {
          key: 'amount',
          headerText: 'Amount',
          isColumnDisplayed: true
        },
        {
          key: 'templateCol',
          headerText: 'Template',
          isColumnDisplayed: true,
          type: TableColumnType.TEMPLATE,
          template: this.templateColumn
        },
        {
          key: 'phone',
          headerText: 'Phone',
          isColumnDisplayed: true,
          type: TableColumnType.LINK,
          link: {
            ariaLabel: 'go to Object #{id}',
            target: '',
            bpRouterLink: 'object/#{id}'
          }
        },
        {
          key: 'description',
          headerText: 'Description',
          isColumnDisplayed: true,
          type: TableColumnType.LINK,
          isSortable: false,
          link: {
            ariaLabel: 'go to Object #{id}',
            action: 'testAction'
          }
        },
        {
          key: 'alert',
          headerText: 'Alert',
          isColumnDisplayed: true,
          type: TableColumnType.ICON,
          icon: {
            color: 'midnight',
            mapping: {
              true: 'fa-check',
              false: ''
            }
          }
        },
        {
          key: 'status',
          headerText: 'Status',
          isColumnDisplayed: true,
          type: TableColumnType.STATUS,
          statusIndicatorMapping: {
            'incomplete-primary': 'Not Deployed',
            'incomplete-secondary': 'New Updates Not Deployed',
            'in-progress': 'Deploying',
            'warning': 'Deployment Error',
            'complete': 'Deployed'
          }
        }
      ],
      sort: {
        defaultSortedColumn: 'amount',
        defaultSortOrder: 'ascending'
      },
      hasSelectableRows: true,
      actions: [
        {
          element: 'a',
          text: 'Edit',
          ariaLabel: 'Edit Object #{id}',
          class: 'btn-outline-primary',
          bpRouterLink: './'
        },
        {
          element: 'button',
          text: 'Deploy',
          ariaLabel: 'Deploy Object #{id}',
          class: 'btn-outline-primary',
          action: 'deploy',
          conditions: [
            {
              column: 'status',
              operator: '!==',
              value: 'Deployed'
            },
            '&&',
            {
              column: 'status',
              operator: '!==',
              value: 'Deploying'
            }
          ]
        },
        {
          element: 'button',
          text: 'Delete',
          ariaLabel: 'Delete Object #{id}',
          class: 'btn-outline-danger',
          action: 'delete',
          isDestructive: true
        }
      ],
      expandableRowsTemplate: this.expandableRowsTemplate,
      hasViewSelector: true,
      hasColumnSelector: true,
      hasDisplayDensity: true
    };
    this.exampleData = tableData;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleAction(action: { action: string; id: string }): void {
    // Use action from action buttons to trigger different events here
  }

  handleViewChange(): void { }

  sortByKeyAsc(array: TableRow[], key: string): void {
    if (key === 'templateCol') {
      array.sort((a: TableRow, b: TableRow) => (a.id < b.id ? -1 : 1));
    } else {
      array.sort((a: TableRow, b: TableRow) => {
        const x = a[key];
        const y = b[key];
        return x < y ? -1 : 1;
      });
    }
  }

  sortByKeyDesc(array: TableRow[], key: string): void {
    if (key === 'templateCol') {
      array.sort((a: TableRow, b: TableRow) => (b.id < a.id ? -1 : 1));
    } else {
      array.sort((a: TableRow, b: TableRow) => {
        const x = a[key];
        const y = b[key];
        return x > y ? -1 : 1;
      });
    }
  }

  handleSort(sort: {order: string; column: string}): void {
    if (sort.order === 'ascending') {
      this.sortByKeyAsc(this.filteredData, sort.column);
    } else {
      this.sortByKeyDesc(this.filteredData, sort.column);
    }
    this.tableData = this.filteredData.slice(
      this.pageIndices.start,
      this.pageIndices.end
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleSelectedRows(selectedRowIds: {
    selected: Record<string, unknown>;
    unselected: Record<string, unknown>;
    numRowsSelected: number;
  }): void {
    // Handle the selected rows here
  }

  // This function could be used to select all rows in the dataset
  selectAllRows(): void {
    this.overviewTable.selectAllRows();
  }

  // This function could be used to unselect all rows in the dataset
  clearAllRows(): void {
    this.overviewTable.clearAllRows();
  }

  handlePageChange(pageData: {indices: IndicesInterface}): void {
    this.pageIndices = { ...pageData.indices };
    this.tableData = this.filteredData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }

  handleSelectedColumn(e) { }
}