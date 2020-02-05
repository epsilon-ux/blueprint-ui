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
  hasAction = false;

  @Input()
  actionElement = 'a'; // Expects either 'button', 'dropdown', or 'a'

  @Input()
  href = ''; // Only required when buttonElement = 'a'

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
    if (this.hasAction && !this.actionText) {
      let err = new Error('actionText is a required Input of bp-landing-page-header when showButton = true');
      err.name = 'Missing Input';
      throw err;
    }
  }

  onActionClick() {
    this.actionClick.emit();
  }
}
