import { Component, OnInit, ViewChild } from '@angular/core';
import { Properties, ColumnType } from 'epsilon-blueprint/models/table-models';

import usageData from './tableUsageData';
import standard from './example-properties/standard';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  // @ViewChild('templateColumn', {static: true}) templateColumn;
  @ViewChild('expandableRowsTemplate', {static: true}) expandableRowsTemplate;

  filteredData = [];
  tableData = [];
  pageIndices;
  isDataLoading = true;

  usageData = usageData;
  usageDataShort = usageData.slice(0, 2);

  // Properties
  standard = standard;
  withCheckboxes = {
    ...standard,
    hasSelectableRows: true
  };
  withActions = {
    ...standard,
    actions: [
      {
        element: 'button',
        text: 'Action',
        ariaLabel: 'action1 for #{id}',
        class: 'btn-outline-primary',
        action: 'action1'
      },
      {
        element: 'button',
        text: 'Action',
        ariaLabel: 'action2 for #{id}',
        class: 'btn-outline-primary',
        action: 'action2'
      }
    ]
  };
  withDropdown = {
    ...standard,
    actions: [
      {
        element: 'button',
        text: 'Action',
        ariaLabel: 'action1 for #{id}',
        class: 'btn-outline-primary',
        action: 'action1'
      },
      {
        element: 'button',
        text: 'Action',
        ariaLabel: 'action1 for #{id}',
        class: 'btn-outline-primary',
        action: 'action1'
      },
      {
        element: 'button',
        text: 'Action',
        ariaLabel: 'action3 for #{id}',
        class: 'btn-outline-primary',
        action: 'action3'
      }
    ]
  };
  withIcons = {
    ...standard,
    columns: [
      ...standard.columns,
      {
        key: 'icon',
        headerText: 'Icon Column',
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
    ]
  };
  withStatus = {
    ...standard,
    columns: [
      ...standard.columns,
      {
        key: 'status',
        headerText: 'Status Column',
        isColumnDisplayed: true,
        type: ColumnType.STATUS,
        statusIndicatorMapping: {
          'incomplete-primary': 'Incomplete Primary',
          'incomplete-secondary': 'Incomplete Secondary',
          'in-progress': 'In Progress',
          'warning': 'Warning',
          'complete': 'Complete'
        }
      },
    ]
  };
  withExpandable = {
    ...standard,
    expandableRowsTemplate: this.expandableRowsTemplate
  };

  constructor() {}

  ngOnInit() {}

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
  
  handleSort(sort, hasPagination) {
    if (sort.order === 'ascending') {
      this.sortByKeyAsc(this.filteredData, sort.column);
    } else {
      this.sortByKeyDesc(this.filteredData, sort.column);
    }
    if (hasPagination) {
        this.tableData = this.filteredData.slice(
        this.pageIndices.start,
        this.pageIndices.end
      );
    }
  }

  handleSelectedRows(selectedRowIds: {
    areAllSelected: boolean;
    selected: {[key: string]: any;}
  }) {
    // Handle the selected rows here
  }

  handlePageChange(pageData) {
    this.pageIndices = {...pageData.indices};
    this.tableData = this.filteredData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }

}
