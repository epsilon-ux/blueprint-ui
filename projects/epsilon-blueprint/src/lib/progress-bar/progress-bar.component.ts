import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {

  @Input() ariaValueMin: string;
  @Input() ariaValueMax: string;
  @Input() ariaValueNow: string;
  @Input() classes = 'progress';
  @Input() hasProgressText?: boolean;

  constructor() { }

  ngOnInit() { }

}