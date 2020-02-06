import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { parseLookupString } from '../../../helpers';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html'
})
export class LinksComponent implements OnInit {

  @Input()
  rowData: {};
  
  @Input()
  linkText: string;
  
  @Input()
  linkProperties: {
    element: string;
    ariaLabel: string;
    target?: string;
    action?: string;
    path?: string;
    href?: string;
  };

  @Output()
  emitAction = new EventEmitter();

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  constructor() {}

  ngOnInit() {}

  triggerAction(action): void {
    this.emitAction.emit(action);
  }
}
