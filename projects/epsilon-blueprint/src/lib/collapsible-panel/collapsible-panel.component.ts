import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss']
})
export class CollapsiblePanelComponent implements OnInit {

  @Input() isPanelCollapsed = false;
  @Input() toggleAriaLabel = 'Toggle collapsible panel';

  constructor() { }

  ngOnInit(): void { }

  togglePanel() {
    this.isPanelCollapsed = !this.isPanelCollapsed;
  }
}