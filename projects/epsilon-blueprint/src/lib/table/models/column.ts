export interface Column {
    key: string;
    headerText: string;
    isColumnDisplayed: boolean;
    type?: ColumnType;
  }
  export enum ColumnType {
    ID,
    TEXT,
    LINK,
    DATE,
    BOOLEAN,
    INPUT,
    STATUS,
    DROPDOWN,
    TEMPLATE
  }
