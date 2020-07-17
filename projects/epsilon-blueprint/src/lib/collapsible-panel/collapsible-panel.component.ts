import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-collapsible-panel',
  templateUrl: './collaspible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss']
})
export class CollapsiblePanelComponent implements OnInit {

  @Input() titleText: string;
  @Input() panelHeaderLink?: boolean;
  @Input() panelFooter?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.validation();
  }

  validation() {
    if (!this.titleText) {
      const err = new Error('\'titleText\' is a required Input of bp-panel');
      err.name = 'Missing Input';
      throw err;
    }
  }

}