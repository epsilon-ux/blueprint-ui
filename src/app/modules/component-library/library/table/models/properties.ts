import { TemplateRef } from '@angular/core';
import { Column } from './column';
import { Action } from './action';

export default interface Properties {
  caption: string;
  rowId: string;
  internationalization?: {
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
    'numResults results': string;
    'Number of Rows': string;
    'First Page': string;
    'Previous Page': string;
    'Next Page': string;
    'Last Page': string;
    'Display Density Options': {
      'Comfortable': string;
      'Compact': string;
    };
    'Number Of Rows Options': {
      optionText: string;
      optionValue: number;
    }[];
  };
  columns: Column[];
  sort: {
    defaultSortedColumn: string;
    defaultSortOrder: string;
    // TBD: Server Side / Client Side / Restricted
  };
  expandableRowsTemplate?: TemplateRef<any>;
  hasSelectableRows?: boolean;
  actions?: Action[];
  hasColumnSelector?: boolean;
  hasDisplayDensity?: boolean;
}
