import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() dropdownText: string;
  @Input() dropdownItems: {
    text: string;
    ariaLabel?: string;
    action?: string;
    href?: string;
    routerLink?: string;
    target?: string;
    isDisabled?: boolean;
  }

  @Output() action = new EventEmitter();

  uuid = 'dropdown' + generateUniqueId();

  constructor() { }

  ngOnInit() {
    this.validation();
  }
  
  validation() {
    // Validation
    /* if (!(this.element === 'a' || this.element === 'button')) {
      const err = new Error('Action\'s element expects either \'button\' or \'a\'');
      err.name = 'Invalid Input';
      throw err;
    }
    if (this.element === 'button' && !this.click) {
      console.warn('Missing click function on action button', this);
    }
    if (this.element === 'a' && !(this.href || this.routerLink)) {
      const err = new Error('Action needs either routerLink or href when element = \'a\'');
      err.name = 'Missing Input';
      throw err;
    }
    if (this.element === 'a' && this.isDisabled) {
      const err = new Error('Action can only be disabled if element = \'button\'');
      err.name = 'Invalid Input';
      throw err;
    } */
  }

  emitAction(e) {
    this.action.emit(e);
  }

}
