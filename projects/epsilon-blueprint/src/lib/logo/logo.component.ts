import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bp-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {

  @Input() product: (
    'product'
    | 'blueprint'
    | 'customer'
    | 'data-hub'
    | 'events'
    | 'iq'
    | 'loyalty'
    | 'messaging'
  ) = 'product';

  @Input() logoSrc?: string;
  @Input() logoAlt?: string;
  @Input() bpClass?: string;

  constructor() { }

  ngOnInit(): void {
    this.logoSrc = `assets/logos/logo-${this.product.toLowerCase()}.svg`;
    this.logoAlt = `Epsilon PeopleCloud ${this.product}`;
  }

}