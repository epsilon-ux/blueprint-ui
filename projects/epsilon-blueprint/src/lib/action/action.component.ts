import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { generateUniqueId } from '../../helpers';
=======
import { isDefined } from '../../helpers';
>>>>>>> dev

@Component({
  selector: 'bp-action',
  templateUrl: './action.component.html'
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
  @Input() bpID: string;

  @Output() click = new EventEmitter();

<<<<<<< HEAD
  uuid: string;
=======
  isDefined = isDefined;
>>>>>>> dev

  constructor() { }

  ngOnInit(): void {
    this.validation();

    if (isDefined(this.routerLink) && !isDefined(this.bpRouterLink)) {
      this.bpRouterLink = this.routerLink;
    }

    if(!this.bpID) {
      this.uuid = 'action' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  validation() {
    if (isDefined(this.href) && isDefined(this.bpRouterLink)) {
      const err = new Error('Cannot pass in both href and bpRouterLink.');
      err.name = 'Invalid Input';
      throw err;
    }
    if ((isDefined(this.href) || isDefined(this.bpRouterLink)) && this.isDisabled) {
      const err = new Error('Action cannot be disabled when bpRouterLink or href is provided.');
      err.name = 'Invalid Input';
      throw err;
    }
    if (isDefined(this.routerLink)) {
      console.warn('bp-action Input routerLink is deprecated, please use bpRouterLink instead.');
    }
  }

  emitClick(e: MouseEvent) {
    e.stopPropagation();
    this.click.emit(e);
  }

}