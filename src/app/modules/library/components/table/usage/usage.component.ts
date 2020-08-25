import { Component, OnInit, ViewChild } from '@angular/core';
import { TablePropertiesInterface, TableColumnType } from 'epsilon-blueprint';

import { usageData, UsageRow } from './tableUsageData';
import standard from './example-properties/standard';

interface IndicesInterface {
  start: number;
  end: number;
}

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  @ViewChild('expandableRowsTemplate', { static: true }) expandableRowsTemplate;

  usageDataPage = usageData.slice(0, 10);
  pageIndices: IndicesInterface;
  isDataLoading = true;

  usageData: UsageRow[] = usageData;
  usageDataShort: UsageRow[] = usageData.slice(0, 2);

  // Properties
  standard: TablePropertiesInterface;
  withSelectable: TablePropertiesInterface;
  withActions: TablePropertiesInterface;
  withDropdown: TablePropertiesInterface;
  withIcons: TablePropertiesInterface;
  withStatus: TablePropertiesInterface;
  withExpandable: TablePropertiesInterface;
  withExpandableAndSelectable: TablePropertiesInterface;
  withLinks: TablePropertiesInterface;
  withFooter: TablePropertiesInterface;

  constructor() { }

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
          text: 'Action',
          ariaLabel: 'action1 for #{id}',
          class: 'btn-outline-primary',
          action: 'action1'
        },
        {
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
          text: 'Action',
          ariaLabel: 'action1 for #{id}',
          class: 'btn-outline-primary',
          action: 'action1'
        },
        {
          text: 'Action',
          ariaLabel: 'action1 for #{id}',
          class: 'btn-outline-primary',
          action: 'action1'
        },
        {
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
          type: TableColumnType.ICON,
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
          type: TableColumnType.STATUS,
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
          type: TableColumnType.LINK,
          link: {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleAction(action: { action: string; id: string }): void {
    // Use action from action buttons to trigger different events here
  }

  sortByKeyAsc(array: UsageRow[], key: string): void {
    if (key === 'templateCol') {
      array.sort((a: UsageRow, b: UsageRow) => (a.id < b.id ? -1 : 1));
    } else {
      array.sort((a: UsageRow, b: UsageRow) => {
        const x = a[key];
        const y = b[key];
        return x < y ? -1 : 1;
      });
    }
  }

  sortByKeyDesc(array: UsageRow[], key: string): void {
    if (key === 'templateCol') {
      array.sort((a: UsageRow, b: UsageRow) => (b.id < a.id ? -1 : 1));
    } else {
      array.sort((a: UsageRow, b: UsageRow) => {
        const x = a[key];
        const y = b[key];
        return x > y ? -1 : 1;
      });
    }
  }

  handleSort(sort: {order: string; column: string}, data: UsageRow[], hasPagination: boolean): void {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleSelectedRows(selectedRowIds: {
    selected: Record<string, unknown>;
    unselected: Record<string, unknown>;
    numRowsSelected: number;
  }): void {
    // Handle the selected rows here
  }

  handlePageChange(pageData: { indices: IndicesInterface }): void {
    this.pageIndices = { ...pageData.indices };
    this.usageDataPage = this.usageData.slice(
      pageData.indices.start,
      pageData.indices.end
    );
  }

}