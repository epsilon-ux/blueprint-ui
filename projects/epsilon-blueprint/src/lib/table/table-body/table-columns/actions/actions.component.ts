import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { parseLookupString } from '../../../helpers';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input()
  actionItems: {
    element: string; // Expect 'a', or 'button'
    text: string;
    ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
    class: string;
    path?: string; // Required if element = 'a'
    action?: string; // Required if element = 'button'
  }[];

  @Input()
  rowId;

  @Input()
  rowData;

  @Input()
  classList: string;

  @Output()
  emitAction = new EventEmitter();

  // Scopes imported function to the class
  parseLookupString = parseLookupString;

  constructor() {}

  ngOnInit() {
    if (this.classList.includes('dropdown-item')) {
      this.actionItems.forEach(action => {
        action.class = '';
      });
    }
    this.actionItems.forEach(
      action =>
        (action.ariaLabel = this.parseLookupString(
          action.ariaLabel,
          this.rowData
        ))
    );
  }

  triggerAction(action) {
    this.emitAction.emit(action);
  }
}
