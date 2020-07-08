import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../models/table-models';

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
  columnInfo: Column[];

  @Input()
  defaultSortColumnName: string;

  @Input()
  internationalization: any;

  @Output()
  displayDensityEmitter = new EventEmitter();

  @Output()
  viewSelectorEmitter = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}

  setDisplayDensity(event) {
    this.displayDensityEmitter.emit(event);
  }

  emitTableView(view) {
    this.viewSelectorEmitter.emit(view);
  }
}
