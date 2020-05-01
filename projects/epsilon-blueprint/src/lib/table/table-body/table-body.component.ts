import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Column, ColumnType } from '../models/column';
import { parseLookupString } from '../../../helpers';
import Properties from '../models/properties';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html'
})
export class TableBodyComponent implements OnInit {
  @Input() tableData: {
    [key: string]: any;
  }[];
  @Input() properties: Properties;

  @Output() action = new EventEmitter();
  @Output() selectedRowsAction = new EventEmitter();
  isRowExpanded = false;

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  // displayDensity
  densityClass: string;

  showSelectedRowsAction = false;
  @ViewChild('selectAllRowsRef', { static: false })
  selectAllRowsRef: ElementRef;

  constructor() {}

  // column type
  get columnType() {
    return ColumnType;
  }

  ngOnInit() {}

  // Statuses
  getStatusClass(value, mapping) {
    return Object.keys(mapping).find(
      key => mapping[key] === value
    );
  }

  selectRows(event) {
    this.selectedRowsAction.emit(event);
  }

  toggleExpanded(row) {
    row._meta.isExpanded = !row._meta.isExpanded;
  }

  emitAction(action: string, rowId: string) {
    this.action.emit({
      action,
      rowId
    });
  }
}
