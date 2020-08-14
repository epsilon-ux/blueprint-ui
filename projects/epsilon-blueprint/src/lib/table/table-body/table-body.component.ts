import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { TableColumnType, TablePropertiesInterface } from '../table.interface';
import { parseLookupString } from '../../../helpers';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html'
})
export class TableBodyComponent implements OnInit {

  @Input() tableData: {
    [key: string]: any;
  }[];
  @Input() properties: TablePropertiesInterface;
  @Input() rowSelectionStates: Map<Record<string, unknown>, boolean>;
  @Input() expandedRows: Set<any>;
  @Input() bpID: string;

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
  get TableColumnType() {
    return TableColumnType;
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