import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableColumnInterface } from '../table.interface';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  @Input()
  hasViewSelector: boolean;

  @Input()
  hasDisplayDensity: boolean;

  @Input()
  hasColumnSelector = false;

  @Input()
  columnInfo: TableColumnInterface[];

  @Input()
  defaultSortColumnName: string;

  @Input()
  internationalization: any;

  @Input()
  bpID: string;

  @Output()
  displayDensityEmitter = new EventEmitter();

  @Output()
  viewSelectorEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  setDisplayDensity(event) {
    this.displayDensityEmitter.emit(event);
  }

  emitTableView(view) {
    this.viewSelectorEmitter.emit(view);
  }

}