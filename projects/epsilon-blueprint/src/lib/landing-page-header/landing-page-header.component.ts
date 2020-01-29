import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.scss']
})
export class LandingPageHeaderComponent implements OnInit {

  @Input()
  headerText = '';

  @Input()
  buttonText = '';
  
  @Input()
  showButton = true;

  @Input()
  buttonElement = 'button'; // Expects either 'button', 'dropdown', or 'a'

  @Input()
  href = '';

  @Output()
  buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
