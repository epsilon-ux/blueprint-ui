import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() text: string;
  @Input() element = 'button';
  @Input() classes = '';
  @Input() ariaLabel: string;
  @Input() href: string;
  @Input() routerLink: string;
  @Input() target = '';
  @Input() isDisabled = false;
  @Input() iconLeft: string;
  @Input() iconRight: string;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.validation();
  }
  
  validation() {
    // Validation
    if (!(this.element === 'a' || this.element === 'button')) {
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
    }
  }

  emitClick(e) {
    this.click.emit(e);
  }

}
