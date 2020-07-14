import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['../table-footer.component.scss']
})
export class ViewSelectorComponent implements OnInit {

  @Input()
  internationalization: any;

  @Output()
  viewSelectorEmitter = new EventEmitter();
  
  viewSelector: string;
  displayOptions: {
    text: string;
    value: string;
  }[];

  constructor() {}

  ngOnInit() {
    this.displayOptions = Object.keys(this.internationalization['View Options']).map(option => ({
      text: this.internationalization['View Options'][option],
      value: option
    }));
    this.viewSelector = 'Table';
  }

  emitTableView() {
    this.viewSelectorEmitter.emit(this.viewSelector);
  }
}
