import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnType, Properties } from 'epsilon-blueprint/models/table-models';
import { TableComponent } from 'epsilon-blueprint';

import { TableRow } from './tableData.interface';
import tableData from 'src/app/datasets/tableData.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  @ViewChild('overviewTable', { static: true }) overviewTable: TableComponent;
  @ViewChild('templateColumn', { static: true }) templateColumn;
  @ViewChild('expandableRowsTemplate', { static: true }) expandableRowsTemplate;

  set exampleData(json) {
    this.rawData = json.customerData.data;
    this.filteredData = json.customerData.data;
    this.tableData = this.filteredData.slice(0, 10);
    this.isDataLoading = false;
  }

  rawData: TableRow[];
  filteredData: TableRow[];
  tableData: TableRow[];
  pageIndices;
  isDataLoading = true;

  properties: Properties;

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
          type: ColumnType.TEMPLATE,
          template: this.templateColumn
        },
        {
          key: 'phone',
          headerText: 'Phone',
          isColumnDisplayed: true,
          type: ColumnType.LINK,
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
          type: ColumnType.LINK,
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
          type: ColumnType.ICON,
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
          type: ColumnType.STATUS,
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
          action: 'delete'
        }
      ],
      expandableRowsTemplate: this.expandableRowsTemplate,
      hasViewSelector: true,
      hasColumnSelector: true,
      hasDisplayDensity: true
    };
    this.exampleData = tableData;
  }

  handleAction(action: { action: string; id: string }) {
    // Use action from action buttons to trigger different events here
  }

  handleViewChange() { }

  sortByKeyAsc(array: TableRow[], key: string) {
    if (key === 'templateCol') {
      return array.sort((a: TableRow, b: TableRow) => (a.id < b.id ? -1 : 1));
    } else {
      return array.sort((a: TableRow, b: TableRow) => {
        const x = a[key];
        const y = b[key];
        return x < y ? -1 : 1;
      });
    }
  }

  sortByKeyDesc(array: TableRow[], key: string) {
    if (key === 'templateCol') {
      return array.sort((a: TableRow, b: TableRow) => (b.id < a.id ? -1 : 1));
    } else {
      return array.sort((a: TableRow, b: TableRow) => {
        const x = a[key];
        const y = b[key];
        return x > y ? -1 : 1;
      });
    }
  }

  handleSort(sort) {
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

  handleSelectedRows(selectedRowIds: {
    selected: {[key: string]: any;}
    unselected: {[key: string]: any;}
    numRowsSelected: number;
  }) {
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

  handlePageChange(pageData) {
    this.pageIndices = { ...pageData.indices };
    this.tableData = this.filteredData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }

}