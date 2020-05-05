import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ContentChild, Directive } from '@angular/core';
import { generateUniqueId, parseLookupString } from '../../helpers';

@Directive({ selector: '[ng-multi-label-tmp]' })
export class NgMultiLabelTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'bp-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiselectComponent implements OnInit {
  
  @ContentChild(NgMultiLabelTemplateDirective, { read: TemplateRef, static: false }) multiLabelTemplate: TemplateRef<any>;
  
  @Input() label = '';
  @Input() isLabelHidden = false;
  @Input() optionItems = [];
  @Input() isSearchable = false;
  @Input() placeholder = '';
  @Input() bindValue: string = null;
  @Input() bindLabel: string = null;
  @Input() maxSelectedItems: number = null;
  @Input() hideSelected = false;
  @Input() notFoundText: string = null;
  @Input() isDisabled = false;
  @Input() isReadonly = false;
  @Input() inputAttrs: {[key: string]: string};
  @Input() internationalization = {
    '+ additional more': '+ #{additional} more'
  };
  @Input() ngModel = [];
  @Output() ngModelChange = new EventEmitter();
  @Output() change = new EventEmitter();
  
  parseLookupString = parseLookupString;
  uuid = 'mutliselect' + generateUniqueId();

  constructor() {}

  ngOnInit() {
    this.validate();
  }

  validate() {
    if (!this.label) {
      let err = new Error('\'label\' is a required Input of bp-multi-select. The label can be visually hidden using the \'isLabelHidden\' property.');
      err.name = 'Missing Input';
      throw err;
    }
  }

  emitSelected() {
    this.change.emit(this.ngModel);
  }
}