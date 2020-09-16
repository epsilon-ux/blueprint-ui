import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bp-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {

  @Input() product = 'product';
  @Input() logoTitle?: string;
  @Input() bpClass?: string;

  defaultTitles = {
    'product': 'Epsilon PeopleCloud Product',
    'blueprint': 'Epsilon Blueprint',
    'customer': 'Epsilon PeopleCloud Customer',
    'data-hub': 'Epsilon Data Hub',
    'events': 'Epsilon Events',
    'iq': 'Epsilon IQ',
    'loyalty': 'Epsilon PeopleCloud Loyalty',
    'messaging': 'Epsilon PeopleCloud Messaging'
  };

  constructor() { }

  ngOnInit(): void {
    this.product = this.product.toLowerCase();
    if (!this.logoTitle) {
      this.logoTitle = this.defaultTitles[this.product];
    }
  }

}