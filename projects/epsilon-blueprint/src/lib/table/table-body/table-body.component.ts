import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  TemplateRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Column, ColumnType } from '../models/column';
import { parseLookupString } from '../helpers';
import Properties from '../models/properties';

@Component({
  selector: '[table-body]',
  templateUrl: './table-body.component.html'
})
export class TableBodyComponent implements OnInit {
  @Input() tableData: {
    [key: string]: any;
  }[];
  @Input() properties: Properties;
  @Input() pageData;
  @Input() expandableRowTemplate: TemplateRef<any>;
  @Input() formData: FormGroup;

  @Output() action = new EventEmitter();
  @Output() selectedRowsAction = new EventEmitter();

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  // displayDensity
  densityClass: string;
  isRowExpanded: Array<boolean>;
  showSelectedRowsAction = false;
  @ViewChild('selectAllRowsRef', { static: false })
  selectAllRowsRef: ElementRef;

  constructor() {}

  // column type
  get columnType() {
    return ColumnType;
  }

  ngOnInit() {
    this.isRowExpanded = new Array<boolean>(this.tableData.length);
  }

  // Statuses
  getStatusClass(value) {
    return Object.keys(this.properties.statusIndicatorMapping).find(
      key => this.properties.statusIndicatorMapping[key] === value
    );
  }

  selectRows(event) {
    this.selectedRowsAction.emit(event);
  }

  emitAction(action: string, rowId: string) {
    this.action.emit({
      action,
      rowId
    });
  }

  // Toggle the expanded row
  toggleExpandRow(row) {
    this.isRowExpanded[row[this.properties.data.rowId]] = !this.isRowExpanded[row[this.properties.data.rowId]];
  }
}
