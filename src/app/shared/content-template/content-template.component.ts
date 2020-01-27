import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html'
})
export class ContentTemplateComponent {
  @Input() pageTitle = '';
  @Input() tagLine = '';

  constructor() {}
}
