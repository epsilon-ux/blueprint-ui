import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})

export class LoadingIndicatorComponent implements OnInit {

  @Input() text: string;
  @Input() inline?: boolean;
  @Input() inPage?: boolean;
  @Input() overPage?: boolean;

  constructor() { }

  ngOnInit() { }

}