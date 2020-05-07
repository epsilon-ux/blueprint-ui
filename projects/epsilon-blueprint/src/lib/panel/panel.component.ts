import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() titleText: string;
  @Input() panelHeaderLink?: boolean;
  @Input() panelFooter?: boolean;

  constructor() { }

  ngOnInit() {
    this.validation();
  }

  validation() {
    if (!this.titleText) {
      let err = new Error('\'titleText\' is a required Input of bp-panel');
      err.name = 'Missing Input';
      throw err;
    }
  }
}