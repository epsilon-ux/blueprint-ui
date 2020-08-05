import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-collapsible-panel',
  templateUrl: './collapsible-panel.component.html'
})
export class CollapsiblePanelComponent implements OnInit {

  @Input() isPanelCollapsed = false;
  @Input() toggleAriaLabel = 'Toggle collapsible panel';
  @Input() isPanelRight = false;

  constructor() { }

  ngOnInit(): void { }

  togglePanel() {
    this.isPanelCollapsed = !this.isPanelCollapsed;
  }

}