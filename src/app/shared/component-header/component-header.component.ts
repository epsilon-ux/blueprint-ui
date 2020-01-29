import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html'
})
export class ComponentHeaderComponent implements OnInit {

  @Input() headingText: string;
  @Input() route: string; // Only needed if tabs present, does not include /components/
  @Input() hasComponent = true;
  @Input() hasDocs = true;

  constructor() {}

  ngOnInit() {}
}
