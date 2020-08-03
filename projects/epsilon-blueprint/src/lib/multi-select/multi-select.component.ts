import {
  Component, OnInit, Input, Output, EventEmitter, TemplateRef, ContentChild, Directive, OnChanges
} from '@angular/core';
import { generateUniqueId, parseLookupString } from '../../helpers';

@Directive({ selector: '[ng-multi-label-tmp]' })
export class NgMultiLabelTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}

@Directive({ selector: '[ng-option-tmp]' })
export class NgOptionTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}

@Component({
  selector: 'bp-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiselectComponent implements OnInit, OnChanges {

  @ContentChild(NgMultiLabelTemplateDirective, {
    read: TemplateRef, static: false
  }) multiLabelTemplate: TemplateRef<any>;

  @ContentChild(NgOptionTemplateDirective, { read: TemplateRef, static: false }) optionTemplate: TemplateRef<any>;

  @Input() label = '';
  @Input() isLabelHidden = false;
  @Input() isInline = false;
  @Input() optionItems: any;
  @Input() hasTags = false;
  @Input() isSearchable = false;
  @Input() placeholder = '';
  @Input() bindValue: string = null;
  @Input() bindLabel: string = null;
  @Input() maxSelectedItems: number;
  @Input() notFoundText: string = null;
  @Input() isDisabled = false;
  @Input() isReadonly = false;
  @Input() inputAttrs: {[key: string]: string};
  @Input() internationalization = {
    '+ additional more': '+ #{additional} more',
    'numSelected out of numTotal selected': '#{numSelected} out of #{numTotal} selected'
  };
  @Input() ngModel: Array<any>;
  @Output() ngModelChange = new EventEmitter();
  @Output() change = new EventEmitter();

  parseLookupString = parseLookupString;
  uuid = 'mutliselect' + generateUniqueId().toString();

  isDataLoaded = false;

  constructor() { }

  ngOnInit(): void {
    this.validate();
  }

  ngOnChanges(changes): void {
    if (changes.optionItems && Array.isArray(changes.optionItems.currentValue)) {
      this.isDataLoaded = true;
    }
  }

  validate() {
    if (!this.label) {
      const err = new Error(
        '\'label\' is a required Input of bp-multi-select. '
        + 'The label can be visually hidden using the \'isLabelHidden\' property.'
      );
      err.name = 'Missing Input';
      throw err;
    }
  }

  emitSelected() {
    this.change.emit(this.ngModel);
  }

}