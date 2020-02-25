import { Column } from './column';
import { Action } from './action';

export default interface Properties {
  caption: string;
  rowId: string;

  /*Table - internationalization support starts here*/
  selectCheckBoxLabel : string;
  actionsVisibleHeader: string;
  actionsHiddenHeader: string;
  loadingText: string;
  noDataText: string;
  selectRowText: string;
  actionMenuLabel: string;  
  /*Ends here*/

  columns: Column[];
  search:  {
    hasSearch: true;
    // TBD: Server Side / Client Side / Restricted
  };
  sort: {
    defaultSortedColumn: string;
    // TBD: Server Side / Client Side / Restricted
  };
  hasSelectableRows: false;
  actions?: Action[];
  hasColumnSelector: true;
  hasDisplayDensity: true;
  pagination: {
    hasPagination: true;
    // TBD: Server Side / Client Side / Restricted 
  };
}
