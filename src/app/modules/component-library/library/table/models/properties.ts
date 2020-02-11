import { ColumnType } from './column';

export default interface Properties {
  rowId: string;
  columns: {
    key: string;
    headerText: string;
    isColumnDisplayed: boolean;
    type: ColumnType;
    iconMapping?: {
      [key: string]: string;
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
  }[];
  search:  {
    hasSearch: boolean;
    // TBD: Server Side / Client Side / Restricted
  };
  sort: {
    defaultSortedColumn: string;
    // TBD: Server Side / Client Side / Restricted
  };
  hasSelectableRows: boolean;
  actions: {
      element: string; // Expect 'a', or 'button'
      text: string;
      ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
      class: string;
      target?: string; // The target of the link i.e. "_blank" to open in a new tab
      path?: string; // Required if element = 'a'
      action?: string; // Required if element = 'button'
      conditions?: ({
        column: string;
        operator: string;
        value: any;
      } | string)[];
    }[];
  hasColumnSelector: boolean;
  hasDisplayDensity: boolean;
  pagination: {
    hasPagination: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
}