import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() logoSrc: string;
  @Input() logoAlt: string;
  @Input() hasCollapsibleMenu?: boolean = true;
  @Input() hasContextSelector?: boolean = true;
  @Input() hasNavigation?: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}