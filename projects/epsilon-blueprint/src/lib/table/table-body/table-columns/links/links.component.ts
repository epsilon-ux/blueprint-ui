import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { parseLookupString } from '../../../../../helpers';

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
    path?: string; // Deprecated: Use bpRouterLink instead
    bpRouterLink: string;
    href?: string;
  };

  @Output()
  emitAction = new EventEmitter();

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  constructor() {}

  ngOnInit() {

    // This is for backwards compatibility. Remove when path is removed.
    if (this.linkProperties.path) {
      console.warn('Table link proeprty "path" is deprecated. Use bpRouterLink instead.');
      if (!this.linkProperties.bpRouterLink) {
        this.linkProperties.bpRouterLink = this.linkProperties.path;
      }
    }
  }

  triggerAction(action): void {
    this.emitAction.emit(action);
  }
}
