import { ColumnType } from './column';

export default interface Properties {
  rowId: string;
  columns: {
    key: string,
    headerText: string,
    isColumnDisplayed: boolean,
    type: ColumnType
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
  statusIndicatorMapping?: {
    'incomplete-primary': string;
    'incomplete-secondary': string;
    'in-progress': string;
    'warning': string;
    'complete': string;
  };
  link: {
    element: string; // 'button' or 'a'
    text: string;
    ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
    target?: string; // The target of the link i.e. "_blank" to open in a new tab
    action?: string; // required if element = 'button'
    path?: string; // required if element = 'a'
  };
  actions: {
      element: string; // Expect 'a', or 'button'
      text: string;
      ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
      class: string;
      target?: string; // The target of the link i.e. "_blank" to open in a new tab
      path?: string; // Required if element = 'a'
      action?: string; // Required if element = 'button'
      conditions: {
        column: string;
        operator: string;
        value: any;
        }[] | string[];
    }[];
  hasColumnSelector: boolean;
  hasDisplayDensity: boolean;
  pagination: {
    hasPagination: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
}