import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { TableColumnType, TablePropertiesInterface, TableStatusInterface } from '../table.interface';
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

  @ViewChild('selectAllRowsRef')
  selectAllRowsRef: ElementRef;

  isRowExpanded = false;

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  // displayDensity
  densityClass: string;

  constructor() { }

  // column type
  get TableColumnType(): any {
    return TableColumnType;
  }

  ngOnInit(): void { }

  // Statuses
  getStatusClass(value: string, mapping: TableStatusInterface): string {
    return Object.keys(mapping).find(
      key => mapping[key] === value
    );
  }

  selectRows(event: MouseEvent, row: Record<string, unknown>): void {
    this.selectedRowsAction.emit({ event, row });
  }

  toggleExpanded(row: Record<string, unknown>): void {
    this.expandedRows.has(row)
      ? this.expandedRows.delete(row)
      : this.expandedRows.add(row);
  }

  emitAction(action: string, rowId: string): void {
    this.action.emit({
      action,
      rowId
    });
  }

}