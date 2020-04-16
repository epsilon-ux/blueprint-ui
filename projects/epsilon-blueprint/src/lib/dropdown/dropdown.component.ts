import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() triggerText: string;
  @Input() triggerClasses = ''; 
  @Input() menuPlacement: 'up' | 'down' | 'left' | 'right' = 'down';
  @Input() dropdownItems: {
    text: string;
    ariaLabel?: string;
    action?: string;
    href?: string;
    routerLink?: string;
    target?: string;
    isDisabled?: boolean;
    isDestructive?: boolean;
  }

  @Output() action = new EventEmitter();

  uuid = 'dropdown' + generateUniqueId();

  constructor() { }

  ngOnInit() { }

  emitAction(e) {
    this.action.emit(e);
  }

}
