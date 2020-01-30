import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html'
})
export class ComponentHeaderComponent implements OnInit {

  @Input() headingText: string;
  @Input() route: string; // TODO: Remove once existing components have tabs enabled
  @Input() hasComponent = true; // TODO: Remove once existing components have tabs enabled
  @Input() hasDocs = true; // TODO: Remove once existing components have tabs enabled

  constructor() {}

  ngOnInit() {}
}
