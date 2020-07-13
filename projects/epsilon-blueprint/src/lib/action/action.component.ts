import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() text: string;
  @Input() classes = '';
  @Input() ariaLabel: string;
  @Input() href: string = undefined;
  @Input() routerLink: string = undefined; // Deprecated: Use bpRouterLink instead.
  @Input() bpRouterLink: string = undefined;
  @Input() target = '';
  @Input() isDisabled = false;
  @Input() iconLeft: string;
  @Input() iconRight: string;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.validation();

    if (this.isDefined(this.routerLink) && !this.isDefined(this.bpRouterLink)) {
      this.bpRouterLink = this.routerLink;
    }
  }

  isDefined(variable) {
    return variable !== undefined && variable !== null;
  }
  
  validation() {
    if(this.isDefined(this.href) && this.isDefined(this.bpRouterLink)) {
      const err = new Error('Can not pass in both href and bpRouterLink.');
      err.name = 'Invalid Input';
      throw err;
    }
    if((this.isDefined(this.href) || this.isDefined(this.bpRouterLink)) && this.isDisabled) {
      const err = new Error('Action cannot be disabled when bpRouterLink or href is provided.');
      err.name = 'Invalid Input';
      throw err;
    }
    if (this.isDefined(this.routerLink)) {
      console.warn('bp-action Input routerLink is deprecaetd, please use bpRouterLink instead.');
    }
  }

  emitClick(e) {
    e.stopPropagation();
    this.click.emit(e);
  }

}
