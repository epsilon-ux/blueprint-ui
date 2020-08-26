import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-status-indicator',
  templateUrl: './status-indicator.component.html'
})
export class StatusIndicatorComponent implements OnInit {

  @Input() status: 'in-progress' | 'incomplete-primary' | 'incomplete-secondary' | 'complete' | 'warning';
  @Input() statusText: string;
  @Input() shouldWrap = false;

  constructor() { }

  ngOnInit(): void {
    this.validate();
  }

  validate(): void {
    if (!this.status) {
      const err = new Error('\'status\' is a required Input of bp-status-indicator');
      err.name = 'Missing Input';
      throw err;
    }
    if (!this.statusText) {
      const err = new Error('\'statusText\' is a required Input of bp-status-indicator');
      err.name = 'Missing Input';
      throw err;
    }
  }

}