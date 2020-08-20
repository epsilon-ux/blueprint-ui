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

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    if (!this.titleText) {
      const err = new Error('\'titleText\' is a required Input of bp-panel');
      err.name = 'Missing Input';
      throw err;
    }
  }

}