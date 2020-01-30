import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../service/table-data.service';
import { ColumnType } from '../models/column';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  loadService: any;

  data = [];
  isDataLoading = true;

  properties = {
    data: {
      thead: [
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
          key: 'phone',
          headerText: 'Phone',
          isColumnDisplayed: true,
          type: ColumnType.LINK
        },
        {
          key: 'description',
          headerText: 'Description',
          isColumnDisplayed: true,
          type: ColumnType.TEXT
        },
        {
          key: 'status',
          headerText: 'Status',
          isColumnDisplayed: true,
          type: ColumnType.STATUS
        }
      ],
      rowId: 'id'
    },
    search: {
      hasSearch: true
    },
    sort: {
      defaultSortedColumn: 'phone'
    },
    hasSelectableRows: true,
    statusIndicatorMapping: {
      'incomplete-primary': 'Not Deployed',
      'incomplete-secondary': 'New Updates Not Deployed',
      'in-progress': 'Deploying',
      'warning': 'Deployment Error',
      'complete': 'Deployed'
    },
    link: {
      element: 'a',
      ariaLabel: 'go to Object ${id}',
      target: '',
      path: '/table/object'
    },
    actions: [
      {
        element: 'a',
        text: 'Edit',
        ariaLabel: 'Edit Object ${id}',
        class: 'btn-outline-primary',
        path: '/table/object/edit'
      },
      {
        element: 'button',
        text: 'Deploy',
        ariaLabel: 'Deploy Object ${id}',
        class: 'btn-outline-primary',
        action: 'deploy'
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

  constructor(private tableDataService: TabledataService) {}

  ngOnInit() {
    this.loadService = this.tableDataService.get_cuData().subscribe(res => {
      this.data = res.body.customerData.data;
      this.isDataLoading = false;
    });
  }

  handleAction(action: { action: string; id: string }) {
    // Use action from action buttons to trigger different events here
  }

  handleSelectedRowsAction(selectedRowIds: Array<number>) {}

  ngOnDestroy() {
    this.loadService.unsubscribe();
  }

}
