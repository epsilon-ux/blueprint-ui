export class Column {
    key: string;
    headerText: string;
    isColumnDisplayed: boolean;
    type?: ColumnType;
  }
  export enum ColumnType {
    TEXT,
    LINK,
    DATE,
    STATUS,
    FIELD
  }
