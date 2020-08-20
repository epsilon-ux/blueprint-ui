import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TableIntlInterface } from '../../table.interface';

@Component({
  selector: 'app-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['../table-footer.component.scss']
})
export class ViewSelectorComponent implements OnInit {

  @Input()
  internationalization: TableIntlInterface;

  @Input()
  bpID: string;

  @Output()
  viewSelectorEmitter = new EventEmitter();

  viewSelector: string;
  displayOptions: {
    text: string;
    value: string;
  }[];

  constructor() { }

  ngOnInit(): void {
    this.displayOptions = Object.keys(this.internationalization['View Options']).map(option => ({
      text: this.internationalization['View Options'][option],
      value: option
    }));
    this.viewSelector = 'Table';
  }

  emitTableView(): void {
    this.viewSelectorEmitter.emit(this.viewSelector);
  }

}