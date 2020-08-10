import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {

  @Input() min: string;
  @Input() max: string;
  @Input() value: string;
  @Input() classes = 'progress';
  @Input() hasProgressText?: boolean;

  constructor() { }

  ngOnInit() { }

}