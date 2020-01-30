import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  headingText = 'Header Text';
  buttonText = 'Button Text';
  showButton = true;
  buttonElement = 'button';
  href = '#';

  constructor() { }

  ngOnInit() {
  }

}
