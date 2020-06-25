import { ColumnType } from 'epsilon-blueprint/models/table-models';

export default {
  caption: 'This is an example of a table with all available table features turned on.',
      rowId: 'id',
      columns: [
        {
          key: 'col1',
          headerText: 'Column Header',
          isColumnDisplayed: true
        },
        {
          key: 'col2',
          headerText: 'Column Header',
          isColumnDisplayed: true
        },
        {
          key: 'col3',
          headerText: 'Column Header',
          isColumnDisplayed: true
        },
        {
          key: 'col4',
          headerText: 'Column Header',
          isColumnDisplayed: true
        },
      ],
      sort: {
        defaultSortedColumn: 'col1',
        defaultSortOrder: 'ascending'
      },
      hasColumnSelector: false,
      hasDisplayDensity: false
};