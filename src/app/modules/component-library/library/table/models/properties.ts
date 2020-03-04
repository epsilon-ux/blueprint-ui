import { Column } from './column';
import { Action } from './action';

export default interface Properties {
  caption: string;
  rowId: string;
  
  /*Table - internationalization support starts here*/
  selectCheckBoxLabel: string;
  actionsVisibleHeader: string;
  actionsHiddenHeader: string;
  loadingText: string;
  noDataText: string;
  selectRowText: string;
  actionMenuLabel: string;
  /*Ends here*/

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
  displayDensityLabel: string;
  columnSelectorLabel:string;
  loadingLabel: string;
  outOfLabel: string;
  defaultLabel: string;
  numberOfRowsLabel: string;
  firstPageText: string;
  previousPageText: string;
  nextPageText: string;
  lastPageText: string;
  pagination: {
    hasPagination: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
}
