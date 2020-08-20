import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-select-all-checkbox',
  templateUrl: './select-all-checkbox.component.html'
})
export class SelectAllCheckboxComponent implements OnInit, OnChanges {

  @Input() bpID: string;
  @Input() isChecked = false;
  @Input() isMixed = false;

  @Input() label: string;
  @Input() visuallyHiddenLabel?: boolean;

  @Output() change = new EventEmitter();

  checked;

  constructor() { }

  ngOnInit(): void {
    this.validation();
    this.getState();
  }

  ngOnChanges(): void {
    this.getState();
  }

  validation(): void {
    if (!this.label) {
      const err = new Error('\'label\' is a required Input of app-select-all-checkbox');
      err.name = 'Missing Input';
      throw err;
    }
  }

  getState(): void {
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

  emitEvent(e: KeyboardEvent | MouseEvent): void {
    this.change.emit(e);
  }

}