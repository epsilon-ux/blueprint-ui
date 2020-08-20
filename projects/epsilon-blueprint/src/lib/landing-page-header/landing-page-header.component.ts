import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.scss']
})
export class LandingPageHeaderComponent implements OnInit {

  @Input()
  headingText: string;

  @Input()
  actionText: string;

  @Input()
  dropdownItems;

  @Input()
  bpRouterLink: string = undefined;

  @Input()
  href: string = undefined;

  @Input()
  isMarginBottom = true;

  @Input()
  bpID: string;

  @Output()
  actionClick = new EventEmitter();

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    this.validateInputs();
    if (!this.bpID) {
      this.uuid = 'landingPageHeader' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  validateInputs(): void {
    if (!this.headingText) {
      const err = new Error('headingText is a required Input of bp-landing-page-header');
      err.name = 'Missing Input';
      throw err;
    }
  }

  onActionClick(e: string): void {
    this.actionClick.emit(e);
  }

}