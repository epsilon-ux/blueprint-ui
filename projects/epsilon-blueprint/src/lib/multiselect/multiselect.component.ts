import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  @Input() label = '';
  @Input() isLabelHidden = false;
  @Input() optionItems = [];
  @Input() isSearchable = false;
  @Input() placeholder = '';
  @Input() bindValue = '';
  @Input() bindLabel = '';
  @Input() ngModel = [];
  @Input() ngModelChange = new EventEmitter();
  @Output() change = new EventEmitter();

  uuid = 'mutliselect' + generateUniqueId();

  constructor() {}

  ngOnInit() {
    this.validate();
  }

  validate() {
    if (!this.label) {
      let err = new Error('\'label\' is a required Input of bp-multiselect. The label can be visually hidden using the \'isLabelHidden property.');
      err.name = 'Missing Input';
      throw err;
    }
  }

  emitSelected() {
    this.change.emit(this.ngModel);
  }
}