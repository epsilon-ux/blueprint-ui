import { Column } from './column';
import { Action } from './action';

export default interface Properties {
  caption: string;
  rowId: string;

  /*Table - internationalization support starts here*/
  internationalization: {
    'Select all rows': 'Select all rows',
    'Actions': 'Actions',
    'Loading data': 'Loading data',
    'No data': 'No data available',
    'Select Row': 'Select Row',
    'Actions Menu': 'Actions Menu',
    'Column Selector': 'Column Selector:',
    'Default': '(Default)',
    'Display Density': 'Display Density:',
    'Number of Rows': 'Number of Rows per Page',
    'First Page': 'First Page',
    'Previous Page': 'Previous Page',
    'Next Page': 'Next Page',
    'Last Page': 'Last Page',
    'Total Records': 0
  };
  /*Ends here*/

  columns: Column[];
  search?:  {
    hasSearch?: boolean;
    // TBD: Server Side / Client Side / Restricted
  };
  sort: {
    defaultSortedColumn: string;
    // TBD: Server Side / Client Side / Restricted
  };
  hasSelectableRows?: boolean;
  actions?: Action[];
  hasColumnSelector?: boolean;
  hasDisplayDensity?: boolean;
  pagination?: {
    hasPagination?: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
}
