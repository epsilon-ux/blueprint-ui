import { Component, OnInit, Input } from '@angular/core';
import { parseLookupString } from '../../helpers';

@Component({
  selector: 'bp-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {

  @Input() min: string;
  @Input() max: string;
  @Input() value: string;
  @Input() classes: string;
  @Input() hasProgressText?: boolean;
  @Input() internationalization = {
    '% complete': '#{value}% complete'
  };

  parseLookupString = parseLookupString;

  constructor() { }

  ngOnInit(): void {
    this.validate();
  }

  validate(): void {
    if (!this.min) {
      const err = new Error('\'min\' is a required Input of bp-progress');
      err.name = 'Missing Input';
      throw err;
    }
    if (!this.max) {
      const err = new Error('\'max\' is a required Input of bp-progress');
      err.name = 'Missing Input';
      throw err;
    }
    if (!this.value) {
      const err = new Error('\'value\' is a required Input of bp-progress');
      err.name = 'Missing Input';
      throw err;
    }
  }

}