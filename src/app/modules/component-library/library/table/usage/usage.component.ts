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

  usageDataPage = usageData.slice(0, 10);
  pageIndices;
  isDataLoading = true;

  usageData = usageData;
  usageDataShort = usageData.slice(0, 2);

  // Properties
  standard;
  withCheckboxes;
  withActions;
  withDropdown;
  withIcons;
  withStatus;
  withExpandable;
  withExpandableAndCheckboxes;
  withLinks;
  withFooter;

  constructor() {}

  ngOnInit() {
    // Properties
    this.standard = standard;

    this.withCheckboxes = {
      ...this.standard,
      hasSelectableRows: true
    };

    this.withActions = {
      ...this.standard,
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

    this.withDropdown = {
      ...this.standard,
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

    this.withIcons = {
      ...this.standard,
      columns: [
        ...this.standard.columns,
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

    this.withStatus = {
      ...this.standard,
      columns: [
        ...this.standard.columns,
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

    this.withExpandable = {
      ...this.standard,
      expandableRowsTemplate: this.expandableRowsTemplate
    };

    this.withExpandableAndCheckboxes = {
      ...this.standard,
      hasSelectableRows: true,
      expandableRowsTemplate: this.expandableRowsTemplate
    };

    this.withLinks = {
      ...this.standard,
      columns: [
        ...this.standard.columns,
        {
          key: 'link',
          headerText: 'Link Column',
          isColumnDisplayed: true,
          type: ColumnType.LINK,
          link: {
            element: 'a',
            ariaLabel: 'go to Object #{id}',
            href: 'https://www.example.com',
            target: null
          }
        }
      ]
    };

    this.withFooter = {
      ...standard,
      hasColumnSelector: true,
      hasDisplayDensity: true
    };
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
  
  handleSort(sort, data, hasPagination) {
    if (sort.order === 'ascending') {
      this.sortByKeyAsc(data, sort.column);
    } else {
      this.sortByKeyDesc(data, sort.column);
    }
    if (hasPagination) {
        this.usageDataPage = data.slice(
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
    this.usageDataPage = this.usageData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }

}
