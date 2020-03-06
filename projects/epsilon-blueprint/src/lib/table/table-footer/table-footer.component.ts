import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../models/column';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {
  @Input()
  totalRecords: number;

  @Input()
  defaultNumberOfRows: number;

  @Input()
  pageBuffer: number;

  @Input()
  pageNumber: number;

  @Input()
  showDisplayDensity: boolean; 

  @Input()
  showDisplayDensityOptions: any;

  @Input()
  showColumnSelector = false;

  @Input()
  columnInfo: Column[];

  @Input()
  defaultSortColumnName: string;

  @Output()
  pageData = new EventEmitter();

  @Output()
  displayDensityEmitter = new EventEmitter();

  @Input()
  displayDensity: string;
  
  @Input()
  columnSelectorText: string;  

  @Input()
  defaultText: string;

  @Input()
  rowCount: string;

  @Input()
  firstPage: string;
  
  @Input()
  previousPage: string;

  @Input()
  nextPage: string;

  @Input()
  lastPage: string;

  @Input()
  showNumberOfRowsOptions: any;

  constructor() {}

  ngOnInit() {}

  emitPageData(event) {
    this.pageData.emit(event);
  }

  setDisplayDensity(event) {
    this.displayDensityEmitter.emit(event);
  }
}
