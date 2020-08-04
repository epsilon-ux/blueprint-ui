import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() triggerText: string;
  @Input() triggerClasses = '';
  @Input() dropDirection: 'up' | 'down' | 'left' | 'right' = 'down';
  @Input() dropdownItems: {
    text: string;
    ariaLabel?: string;
    action?: string;
    href?: string;
    routerLink?: string; // Deprecated: Use bpRouterLink instead.
    bpRouterLink?: string;
    target?: string;
    isDisabled?: boolean;
    isDestructive?: boolean;
  }[];

  @Output() action = new EventEmitter();

  uuid = 'dropdown' + generateUniqueId().toString();

  constructor() { }

  ngOnInit(): void {
    // This is for backwards compatibility: remove when removing routerLink option
    this.dropdownItems.forEach(item => {
      if (item.routerLink && !item.bpRouterLink) {
        item.bpRouterLink = item.routerLink;
      }
    });
  }

  emitAction(e) {
    this.action.emit(e);
  }

}