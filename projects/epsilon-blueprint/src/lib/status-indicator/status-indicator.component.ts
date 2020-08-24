import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-status-indicator',
  templateUrl: './status-indicator.component.html'
})
export class StatusIndicatorComponent implements OnInit {

  @Input() isInProgress = false;
  @Input() status: string;

  constructor() { }

  ngOnInit(): void { }

}