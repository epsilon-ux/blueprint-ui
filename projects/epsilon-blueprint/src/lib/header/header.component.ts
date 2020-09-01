import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() logoSrc: string;
  @Input() logoAlt: string;
  @Input() hasCollapsibleMenu?: boolean;
  @Input() hasContextSelector?: boolean;
  @Input() hasNavigation?: boolean;

  constructor() { }

  ngOnInit(): void { }

}