import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ColumnType } from '../models/column';
import Properties from '../models/properties';

import tableData from 'src/app/datasets/tableData.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @ViewChild('templateColumn', {static: true}) templateColumn;

  set customerData(json) {
    this.data = json.customerData.data;
    this.isDataLoading = false;
  }

  data = [];
  isDataLoading = true;

  properties: Properties;

  constructor() {}

  ngOnInit() {    
    this.properties = {
      
      /*Table - internationalization support starts here*/
      selectCheckBoxLabel: 'Select all rows',
      actionsVisibleHeader: 'Actions',
      actionsHiddenHeader: 'Actions',
      loadingText: 'Loading data',
      noDataText: 'No data available',
      selectRowText: 'Select Row',
      actionMenuLabel: 'Actions Menu',
      columnSelectorLabel:'Column Selector:',
      loadingLabel:'Showing',
      outOfLabel: 'out of',
      defaultLabel: '(Default)',
      displayDensityLabel: 'Display Density:',      
      numberOfRowsLabel: 'Number of Rows per Page',
      firstPageText: 'First Page',
      previousPageText: 'Previous Page',
      nextPageText: 'Next Page',
      lastPageText: 'Last Page', 
      /*Ends here*/      
      
      caption: 'This is an example of a table with all available table features turned on.',
      rowId: 'id',
      columns: [
        {
          key: 'date',
          headerText: 'Date',
          isColumnDisplayed: true,
          type: ColumnType.DATE
        },
        {
          key: 'amount',
          headerText: 'Amount',
          isColumnDisplayed: true,
          type: ColumnType.TEXT
        },
        {
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
            ariaLabel: 'go to Object ${id}',
            target: '',
            path: 'object/${id}'
          }
        },
        {
          key: 'description',
          headerText: 'Description',
          isColumnDisplayed: true,
          type: ColumnType.LINK,
          link: {
            element: 'a',
            ariaLabel: 'go to Object ${id}',
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
      search: {
        hasSearch: true
      },
      sort: {
        defaultSortedColumn: 'phone'
      },
      hasSelectableRows: true,
      actions: [
        {
          element: 'a',
          text: 'Edit',
          ariaLabel: 'Edit Object ${id}',
          class: 'btn-outline-primary',
          path: 'object/edit'
        },
        {
          element: 'button',
          text: 'Deploy',
          ariaLabel: 'Deploy Object ${id}',
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
          ariaLabel: 'Delete Object ${id}',
          class: 'btn-outline-danger',
          action: 'delete'
        }
      ],
      hasColumnSelector: true,
      hasDisplayDensity: true,
      pagination: {
        hasPagination: true
      }
    };
    this.customerData = tableData;
  }

  handleAction(action: { action: string; id: string }) {
    // Use action from action buttons to trigger different events here
  }

  handleSelectedRowsAction(selectedRowIds: Array<number>) {}
}
