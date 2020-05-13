import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})

export class ToggleComponent implements OnInit {

  @Input() toggleGroupName: string;
  @Input() toggleOptions: {
    text: string;
    id?: string;
    value?: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    // action?: string; btn
  }

  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // add validation
  }

  emitAction(e) {
    this.action.emit(e);
  }
}