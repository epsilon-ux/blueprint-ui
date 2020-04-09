import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  routerLink: string = undefined;

  @Input()
  href: string = undefined;

  @Output()
  actionClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.validateInputs()
  }

  validateInputs() {
    if (!this.headingText) {
      let err = new Error('headingText is a required Input of bp-landing-page-header');
      err.name = 'Missing Input';
      throw err;
    }
  }

  onActionClick(e) {
    this.actionClick.emit(e);
  }
}
