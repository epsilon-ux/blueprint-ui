import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-select-all-checkbox',
  templateUrl: './select-all-checkbox.component.html'
})
export class SelectAllCheckboxComponent implements OnInit, OnChanges {

  @Input() id: string;
  @Input() name?: string;
  @Input() value?: string;
  @Input() isChecked = false;
  @Input() isMixed = false;
  @Input() isDisabled = false;
  @Input() isRequired = false;

  @Input() label: string;
  @Input() visuallyHiddenLabel?: boolean;

  @Output() change = new EventEmitter();

  checked;
  
  constructor() { }
  
  ngOnInit() {
    this.validation();
    this.getState();
  }

  ngOnChanges() {
    this.getState();
  }

  validation() {
    if (!this.label) {
      let err = new Error('\'label\' is a required Input of bp-checkbox');
      err.name = 'Missing Input';
      throw err;
    }
  }

  getState() {
    switch (true) {
      case this.isMixed:
        this.checked = 'mixed';
        break;
      case this.isChecked:
        this.checked = 'true';
        break;
      default:
        this.checked = 'false';
    }
  }

  emitEvent(e) {
    console.log(e);
    e.preventDefault();
    this.change.emit(e);
  }
}