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
  @Input() routerLink: string = undefined;
  @Input() target = '';
  @Input() isDisabled = false;
  @Input() iconLeft: string;
  @Input() iconRight: string;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.validation();
  }

  isDefined(variable) {
    return variable !== undefined && variable !== null;
  }
  
  validation() {
    if(this.isDefined(this.href) && this.isDefined(this.routerLink)) {
      const err = new Error('Can not pass in both href and routerLink.');
      err.name = 'Invalid Input';
      throw err;
    }
    if((this.isDefined(this.href) || this.isDefined(this.routerLink)) && this.isDisabled) {
      const err = new Error('Action cannot be disabled when routerLink or href is provided.');
      err.name = 'Invalid Input';
      throw err;
    }
  }

  emitClick(e) {
    this.click.emit(e);
  }

}
