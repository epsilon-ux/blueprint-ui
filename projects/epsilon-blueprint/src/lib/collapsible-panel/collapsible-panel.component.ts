import { Component, OnInit, Input } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-collapsible-panel',
  templateUrl: './collapsible-panel.component.html'
})
export class CollapsiblePanelComponent implements OnInit {

  @Input() isPanelCollapsed = false;
  @Input() toggleAriaLabel = 'Toggle collapsible panel';
  @Input() isPanelRight = false;
  @Input() bpID: string;

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    if(!this.bpID) {
      this.uuid = 'collapsible-panel' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  togglePanel() {
    this.isPanelCollapsed = !this.isPanelCollapsed;
  }

}