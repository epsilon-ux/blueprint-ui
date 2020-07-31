import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnType, Properties } from 'epsilon-blueprint/models/table-models';
import { TableComponent } from 'epsilon-blueprint';

import tableData from 'src/app/datasets/tableData.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
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

  rawData = [];
  filteredData = [];
  tableData = [];
  pageIndices;
  isDataLoading = true;

  properties: Properties;

  constructor() {}

  ngOnInit() {
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
            element: 'a',
            ariaLabel: 'go to Object #{id}',
            target: '',
            path: 'object/#{id}'
          }
        },
        {
          key: 'description',
          headerText: 'Description',
          isColumnDisplayed: true,
          type: ColumnType.LINK,
          isSortable: false,
          link: {
            element: 'a',
            ariaLabel: 'go to Object #{id}',
            target: '_blank',
            href: 'https://www.example.com'
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
        defaultSortedColumn: 'phone',
        defaultSortOrder: 'ascending'
      },
      hasSelectableRows: true,
      actions: [
        {
          element: 'a',
          text: 'Edit',
          ariaLabel: 'Edit Object #{id}',
          class: 'btn-outline-primary',
          routerLink: './'
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
      hasColumnSelector: true,
      hasDisplayDensity: true
    };
    this.exampleData = tableData;
  }

  handleAction(action: { action: string; id: string }) {
    // Use action from action buttons to trigger different events here
  }

  sortByKeyAsc(array, key) {
    if (key === 'templateCol') {
      return array.sort((a, b) => a.id < b.id ? -1 : 1);
    } else {
      return array.sort((a, b) => {
        const x = a[key];
        const y = b[key];
        return x < y ? -1 : 1;
      });
    }
  }

  sortByKeyDesc(array, key) {
    if (key === 'templateCol') {
      return array.sort((a, b) => b.id < a.id ? -1 : 1);
    } else {
      return array.sort((a, b) => {
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
    this.pageIndices = {...pageData.indices};
    this.tableData = this.filteredData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }
}
