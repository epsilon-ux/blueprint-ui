import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-collapsible-panel',
  templateUrl: './collapsible-panel.component.html'
})
export class CollapsiblePanelComponent implements OnInit {

  @Input() isPanelCollapsed = false;
  @Input() toggleAriaLabel = 'Toggle collapsible panel';
  @Input() isPanelRight = false;
  @Input() hasSearchToggle = false;
  @Input() isWidthAuto = false;
  @Input() bpID: string;

  @Output() click = new EventEmitter(); // Deprecated
  @Output() togglePanel = new EventEmitter();

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.bpID) {
      this.uuid = 'collapsiblePanel' + String(generateUniqueId());
    } else {
      this.uuid = this.bpID;
    }
  }

  panelToggle(): void {
    this.isPanelCollapsed = !this.isPanelCollapsed;
    this.click.emit();
    this.togglePanel.emit();
  }

}