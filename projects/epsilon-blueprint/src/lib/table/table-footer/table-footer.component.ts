import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../models/column';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  @Input()
  showDisplayDensity: boolean; 

  @Input()
  showColumnSelector = false;

  @Input()
  columnInfo: Column[];

  @Input()
  defaultSortColumnName: string;

  @Output()
  displayDensityEmitter = new EventEmitter();

  @Input()
  internationalization: any;
  
  constructor() {}

  ngOnInit() {}

  setDisplayDensity(event) {
    this.displayDensityEmitter.emit(event);
  }
}
