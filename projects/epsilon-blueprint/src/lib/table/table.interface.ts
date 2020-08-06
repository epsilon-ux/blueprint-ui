import { TemplateRef } from '@angular/core';

export interface TablePropertiesInterface {
  caption: string;
  rowId: string;
  internationalization?: Partial<TableIntlInterface>;
  columns: TableColumnInterface[];
  sort: {
    defaultSortedColumn: string;
    defaultSortOrder: string;
  };
  expandableRowsTemplate?: TemplateRef<any>;
  hasSelectableRows?: boolean;
  actions?: TableActionInterface[];
  hasViewSelector?: boolean;
  hasColumnSelector?: boolean;
  hasDisplayDensity?: boolean;
}

export interface TableIntlInterface {
  'Select all rows': string;
  'Actions': string;
  'Expand/Collapse': string;
  'Loading data': string;
  'No data': string;
  'Select Row': string;
  'Actions Menu': string;
  'Column Selector': string;
  'Default': string;
  'Showing numVisible out of numTotal': string;
  'Display Density': string;
  'Display Density Options': {
    'Comfortable': string;
    'Compact': string;
  };
}

export interface TableColumnInterface {
  key: string;
  headerText: string;
  isColumnDisplayed?: boolean;
  type?: TableColumnType;
  isSortable?: boolean;
  template?: TemplateRef<any>;
  icon?: {
    color: string;
    mapping: {
      [key: string]: string;
    };
  };
  link?: {
    element?: string; // Deprecated, this is no longer needed
    ariaLabel: string; // Can use #{key} syntax to insert values from the row corresponding to the given key
    target?: string; // The target of the link i.e. "_blank" to open in a new tab
    action?: string; // Required if element = 'button'
    path?: string; // Deprecated: Use bpRouterLink instead
    bpRouterLink?: string; // Required if element = 'a' and you need to use routerLink
    href?: string; // Required if element = 'a' and you need to use an external link
  };
  statusIndicatorMapping?: {
    'incomplete-primary'?: string;
    'incomplete-secondary'?: string;
    'in-progress'?: string;
    'warning'?: string;
    'complete'?: string;
  };
  columnIndex?: number; // This is set internally in the component and should not be provided by the user
}

export enum TableColumnType {
  ICON,
  LINK,
  STATUS,
  TEMPLATE
}

export interface TableActionInterface {
  element?: string; // Deprecated: this is no longer needed
  text: string;
  ariaLabel: string; // Can use #{key} syntax to insert values from the row corresponding to the given key
  class: string;
  target?: string; // The target of the link i.e. "_blank" to open in a new tab
  routerLink?: string; // Deprecated: Use bpRouterLink instead
  bpRouterLink?: string;
  href?: string;
  action?: string;
  conditions?: ({
    column: string;
    operator: string;
    value: any;
  } | string)[];
}