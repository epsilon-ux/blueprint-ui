import { TemplateRef } from '@angular/core';

export interface Column {
  key?: string; // Required, unless columnType = TEMPLATE
  headerText: string;
  isColumnDisplayed: boolean;
  type?: ColumnType;
  isSortable?: boolean;
  template?: TemplateRef<any>;
  icon?: {
      color: string;
      mapping: {
        [key: string]: string;
      }
    };
  link?: {
    element: string; // Expect 'a', or 'button'
    ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
    target?: string; // The target of the link i.e. "_blank" to open in a new tab
    action?: string; // Required if element = 'button'
    path?: string; // Required if element = 'a' and you need to use routerLink
    href?: string; // Required if element = 'a' and you need to use an external link
  };
  statusIndicatorMapping?: {
    'incomplete-primary': string;
    'incomplete-secondary': string;
    'in-progress': string;
    'warning': string;
    'complete': string;
  };
}

export enum ColumnType {
  ICON,
  LINK,
  STATUS,
  TEMPLATE
}
