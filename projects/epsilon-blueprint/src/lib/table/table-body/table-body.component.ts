import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ColumnType, Properties } from '../../../models/table-models';
import { parseLookupString } from '../../../helpers';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html'
})
export class TableBodyComponent implements OnInit {

  @Input() tableData: {
    [key: string]: any;
  }[];
  @Input() properties: Properties;
  @Input() selectedRows: Set<any>;
  @Input() expandedRows: Set<any>;

  @Output() action = new EventEmitter();
  @Output() selectedRowsAction = new EventEmitter();

  @ViewChild('selectAllRowsRef', { static: false })
  selectAllRowsRef: ElementRef;

  isRowExpanded = false;

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  // displayDensity
  densityClass: string;

  constructor() { }

  // column type
  get columnType() {
    return ColumnType;
  }

  ngOnInit(): void { }

  // Statuses
  getStatusClass(value, mapping) {
    return Object.keys(mapping).find(
      key => mapping[key] === value
    );
  }

  selectRows(event, row) {
    this.selectedRowsAction.emit({ event, row });
  }

  toggleExpanded(row) {
    this.expandedRows.has(row)
      ? this.expandedRows.delete(row)
      : this.expandedRows.add(row);
  }

  emitAction(action: string, rowId: string) {
    this.action.emit({
      action,
      rowId
    });
  }

}