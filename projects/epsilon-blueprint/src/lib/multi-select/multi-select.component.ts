import {
  Component, OnInit, Input, Output, EventEmitter, TemplateRef, ContentChild, Directive, OnChanges, SimpleChanges
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
    read: TemplateRef
  }) multiLabelTemplate: TemplateRef<any>;

  @ContentChild(NgOptionTemplateDirective, { read: TemplateRef }) optionTemplate: TemplateRef<any>;

  @Input() label = '';
  @Input() isLabelHidden = false;
  @Input() isInline = false;
  @Input() optionItems: any;
  @Input() hasTags = false;
  @Input() isSearchable = false;
  @Input() placeholder = '';
  @Input() bindValue: string = null;
  @Input() bindLabel: string = null;
  @Input() groupBy: string = null;
  @Input() selectableGroup = true;
  @Input() selectableGroupAsModel = false;
  @Input() maxSelectedItems: number;
  @Input() notFoundText: string = null; // Deprecated: Use intl input
  @Input() isDisabled = false;
  @Input() isReadonly = false;
  @Input() inputAttrs: {[key: string]: string};
  @Input() internationalization = {
    '+ additional more': '+ #{additional} more',
    'numSelected out of numTotal selected': '#{numSelected} out of #{numTotal} selected',
    'No items found': 'No items found'
  };
  @Input() ngModel: Array<any>;
  @Input() bpID: string;
  @Output() ngModelChange = new EventEmitter();
  @Output() change = new EventEmitter();

  parseLookupString = parseLookupString;
  uuid: string;

  isDataLoaded = false;
  isSearching = false;

  constructor() { }

  ngOnInit(): void {
    this.validate();
    if (!this.bpID) {
      this.uuid = 'multiSelect' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
    if (this.notFoundText) {
      this.internationalization['No items found'] = this.notFoundText;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.optionItems && Array.isArray(changes.optionItems.currentValue)) {
      this.isDataLoaded = true;
    }
  }

  validate(): void {
    if (!this.label) {
      const err = new Error(
        '\'label\' is a required Input of bp-multi-select. '
        + 'The label can be visually hidden using the \'isLabelHidden\' property.'
      );
      err.name = 'Missing Input';
      throw err;
    }
    if (this.notFoundText) {
      console.warn(
        'bp-multi-select\'s input \'notFoundText\' is deprecated. Use the internationalization input instead.'
      );
    }
  }

  handleSearch(e: { term: string }): void {
    this.isSearching = e.term.length > 0;
  }

  emitSelected(): void {
    this.change.emit(this.ngModel);
  }

}