import { Column } from './column';
import { Action } from './action';

export default interface Properties {
  caption: string;
  rowId: string;
  internationalization?: {
    'Select all rows': string;
    'Actions': string;
    'Loading data': string;
    'No data': string;
    'Select Row': string;
    'Actions Menu': string;
    'Display Density': string;
    'Column Selector': string;
    'Default': string;
    'Number of Rows': string;  
    'First Page': string,
    'Previous Page': string,
    'Next Page': string,
    'Last Page': string,
    'Total Records': number,
    'Display Density Options': any,
    'Number Of Rows Options': any
  };
  columns: Column[];
  search:  {
    hasSearch: boolean;
    // TBD: Server Side / Client Side / Restricted
  };
  sort: {
    defaultSortedColumn: string;
    // TBD: Server Side / Client Side / Restricted
  };
  hasSelectableRows: boolean;
  actions?: Action[];
  hasColumnSelector: boolean;
  hasDisplayDensity: boolean;
  pagination: {
    hasPagination: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
}
