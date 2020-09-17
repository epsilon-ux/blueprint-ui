import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html'
})
export class BaseTemplateComponent implements OnInit {

  @Input() navSecondary: {
    title: string;
    items: {
      route: string;
      text: string;
    }[];
  };
  @Input() footerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void { }

  skipToMain(): void {
    event.preventDefault();
    location.hash = 'mainContent';
  }

}