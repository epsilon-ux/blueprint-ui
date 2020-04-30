import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ContentChild, Directive } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Directive({ selector: '[ng-multi-label-tmp]' })
export class NgMultiLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'bp-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  @ContentChild(NgMultiLabelTemplateDirective, { read: TemplateRef, static: false }) multiLabelTemplate: TemplateRef<any>;

  @Input() label = '';
  @Input() isLabelHidden = false;
  @Input() optionItems = [];
  @Input() isSearchable = false;
  @Input() placeholder = '';
  @Input() bindValue = '';
  @Input() bindLabel = '';
  @Input() isDisabled = false;
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
      let err = new Error('\'label\' is a required Input of bp-multiselect. The label can be visually hidden using the \'isLabelHidden\' property.');
      err.name = 'Missing Input';
      throw err;
    }
  }

  emitSelected() {
    this.change.emit(this.ngModel);
  }
}