import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.scss']
})
export class BaseTemplateComponent implements OnInit {

  @Input() navSecondary: {
    title: string;
    items: {
      route: string;
      text: string;
    }[];
  };

  constructor() { }

  ngOnInit() { }

  skipToMain() {
    event.preventDefault();
    location.hash='mainContent';
  }
}