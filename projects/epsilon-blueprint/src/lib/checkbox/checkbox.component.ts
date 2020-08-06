import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { generateUniqueId } from '../../helpers';

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
  @Input() bpID: string;

  @Input() label: string;
  @Input() visuallyHiddenLabel?: boolean;

  @Output() change = new EventEmitter();

  checked;

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    this.checked = this.isChecked;
    this.validation();

    if(!this.bpID) {
      if(!this.id) {
        this.uuid = 'checkbox' + generateUniqueId().toString();
      } else {
        this.uuid = this.id;
        const err = new Error('Input id is deprecated.  Please use Input bpID instead.');
        err.name = 'Input Deprecated';
        throw err;
      }
    } else {
      this.uuid = this.bpID;
    }
  }

  ngOnChanges(changes): void {
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