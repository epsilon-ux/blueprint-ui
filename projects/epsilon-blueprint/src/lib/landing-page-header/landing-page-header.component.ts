import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.scss']
})
export class LandingPageHeaderComponent implements OnInit {

  @Input()
  headingText = '';

  @Input()
  buttonText = '';
  
  @Input()
  showButton = true;

  @Input()
  buttonElement = 'button'; // Expects either 'button', 'dropdown', or 'a'

  @Input()
  href = ''; // Only required when buttonElement = 'a'

  @Output()
  buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
