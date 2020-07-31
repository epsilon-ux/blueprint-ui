import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html'
})
export class ComponentHeaderComponent implements OnInit {

  @Input() headingText: string;

  constructor() { }

  ngOnInit(): void { }

}