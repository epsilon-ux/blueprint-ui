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
    'Display Density Options': {
      'Comfortable': string;
      'Compact': string;
    };
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
