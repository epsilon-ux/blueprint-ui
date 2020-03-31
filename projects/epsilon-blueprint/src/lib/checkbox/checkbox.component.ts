import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

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

  validation() {
    if (!this.label) {
      let err = new Error('\'label\' is a required Input of bp-checkbox');
      err.name = 'Missing Input';
      throw err;
    }
  }

  emitChange(e) {
    this.change.emit(e);
  }
}