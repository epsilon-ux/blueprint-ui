import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-header',
  templateUrl: './landing-page-header.component.html'
})
export class LandingPageHeaderComponent implements OnInit {

  headerText = 'Header Text';
  buttonText = 'Button Text';
  showButton = true;
  buttonElement = 'button';
  href = '#';

  constructor() {}

  ngOnInit() {}
}
