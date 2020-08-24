import { Component, OnInit, Input } from '@angular/core';
import { parseLookupString, isDefined, generateUniqueId } from '../../helpers';

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
  @Input() bpID: string;

  parseLookupString = parseLookupString;

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    this.validate();
    if (!this.bpID) {
      this.uuid = 'progressBar' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  validate(): void {
    if (!isDefined(this.min)) {
      const err = new Error('\'min\' is a required Input of bp-progress');
      err.name = 'Missing Input';
      throw err;
    }
    if (!isDefined(this.max)) {
      const err = new Error('\'max\' is a required Input of bp-progress');
      err.name = 'Missing Input';
      throw err;
    }
    if (!isDefined(this.value)) {
      const err = new Error('\'value\' is a required Input of bp-progress');
      err.name = 'Missing Input';
      throw err;
    }
  }

}