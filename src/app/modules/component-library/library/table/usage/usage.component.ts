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

  @ViewChild('expandableRowsTemplate', { static: true }) expandableRowsTemplate;

  usageDataPage = usageData.slice(0, 10);
  pageIndices;
  isDataLoading = true;

  usageData = usageData;
  usageDataShort = usageData.slice(0, 2);

  // Properties
  standard;
  withSelectable;
  withActions;
  withDropdown;
  withIcons;
  withStatus;
  withExpandable;
  withExpandableAndSelectable;
  withLinks;
  withFooter;

  constructor() {}

  ngOnInit(): void {
    // Properties
    this.standard = standard;

    this.withSelectable = {
      ...this.standard,
      caption: 'This is an example of a table with selectable rows.',
      hasSelectableRows: true
    };

    this.withActions = {
      ...this.standard,
      caption: 'This is an example of a table with actions.',
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
      caption: 'This is an example of a table with an actions dropdown.',
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
      caption: 'This is an example of a table with icons.',
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
        }
      ]
    };

    this.withStatus = {
      ...this.standard,
      caption: 'This is an example of a table with statuses.',
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
        }
      ]
    };

    this.withExpandable = {
      ...this.standard,
      caption: 'This is an example of a table with expandable rows.',
      expandableRowsTemplate: this.expandableRowsTemplate
    };

    this.withExpandableAndSelectable = {
      ...this.standard,
      caption: 'This is an example of a table with expandable and selectable rows.',
      hasSelectableRows: true,
      expandableRowsTemplate: this.expandableRowsTemplate
    };

    this.withLinks = {
      ...this.standard,
      caption: 'This is an example of a table with links.',
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
      caption: 'This is an example of a table with a footer.',
      hasColumnSelector: true,
      hasDisplayDensity: true
    };
  }

  handleAction(action: { action: string; id: string }) {
    // Use action from action buttons to trigger different events here
  }

  sortByKeyAsc(array, key) {
    if (key === 'templateCol') {
      return array.sort((a, b) => (a.id < b.id ? -1 : 1));
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
      return array.sort((a, b) => (b.id < a.id ? -1 : 1));
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
    selected: {[key: string]: any};
  }) {
    // Handle the selected rows here
  }

  handlePageChange(pageData) {
    this.pageIndices = { ...pageData.indices };
    this.usageDataPage = this.usageData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }

}