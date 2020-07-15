import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'bp-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit, OnChanges {

  @Input() id: string;
  @Input() name?: string;
  @Input() value?: string;
  @Input() isChecked = false;
  @Input() isDisabled = false;
  @Input() isRequired = false;

  @Input() label: string;
  @Input() visuallyHiddenLabel?: boolean;

  @Output() change = new EventEmitter();

  checked;

  constructor() { }

  ngOnInit() {
    this.checked = this.isChecked;
    this.validation();
  }

  ngOnChanges(changes) {
    if (changes.isChecked && !changes.isChecked.firstChange) {
      this.checked = changes.isChecked.currentValue;
    }
  }

  validation() {
    if (!this.label) {
      const err = new Error('\'label\' is a required Input of bp-checkbox');
      err.name = 'Missing Input';
      throw err;
    }
  }

  emitChange(e) {
    e.stopPropagation();
    this.change.emit(e);
  }

}