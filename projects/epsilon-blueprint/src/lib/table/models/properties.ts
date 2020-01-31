import { ColumnType } from './column';

export default interface Properties {
  data: {
    thead: {
      key: string,
      headerText: string,
      isColumnDisplayed: boolean,
      type: ColumnType
    }[];
    rowId: string;
    formControl: {
      key: string,
      formControlType: string, // Expect 'text', 'number', 'email, 'date', 'checkbox', 'single-select', 'multi-select'
      label: string, // form control specific label
      isLabelVisible?: boolean, // to apply sr-only class for accessibility
      placeholder?: string, // to add a placeholder to the form control
      readOnly?: boolean, // to make a form control readonly
      errorMessage?: string, // The validation message to be displayed below the form control
      dropdownOptions?: Array<{ optionText: string, optionValue: string | number }> // for formControlType: single-select and multi-select
    }[];
  };
  search:  {
    hasSearch: boolean;
    // TBD: Server Side / Client Side / Restricted
  };
  sort: {
    defaultSortedColumn: string;
    // TBD: Server Side / Client Side / Restricted
  };
  hasSelectableRows: boolean;
  hasExpandableRows: boolean;
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
    }[];
  hasColumnSelector: boolean;
  hasDisplayDensity: boolean;
  pagination: {
    hasPagination: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
}