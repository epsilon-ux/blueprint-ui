import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  @Input() label = '';
  @Input() optionItems = [];
  @Input() isSearchable = false;
  @Input() placeholder = '';
  @Input() bindValue = '';
  @Input() bindLabel = '';
  @Output() change = new EventEmitter();
  selectedOptions = [];

  uuid = 'mutliselect' + generateUniqueId();

  constructor() {}

  ngOnInit() {}

  emitSelected() {
    this.change.emit(this.selectedOptions);
  }
}