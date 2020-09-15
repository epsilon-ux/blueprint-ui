import { Component, OnInit, Input } from '@angular/core';
import { generateUniqueId, isDefined } from '../../helpers';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() product: string;
  @Input() logoTitle: string;
  @Input() logoHref?: string;
  @Input() logoRouterLink?: string;
  @Input() hasCollapsibleMenu?: boolean = true;
  @Input() hasContextSelector?: boolean = true;
  @Input() hasNavigation?: boolean = true;
  @Input() expandBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() bpID: string;
  @Input() internationalization = {
    'Menu': '',
    'MenuAriaLabel': '',
    'NavAriaLabel': ''
  };

  constructor() {}

  ngOnInit(): void {
    if (!this.bpID) {
      this.bpID = 'collapsibleMenu' + String(generateUniqueId());
    }

    const intlDefaults = {
      'Menu': 'Menu',
      'MenuAriaLabel': 'Toggle primary navigation',
      'NavAriaLabel': 'Primary Navigation'
    };

    Object.keys(intlDefaults).forEach(intl => {
      if (!this.internationalization[intl]) {
        this.internationalization[intl] = intlDefaults[intl];
      }
    });
  }

  isLogoLink(): boolean {
    return isDefined(this.logoHref) || isDefined(this.logoRouterLink);
  }

}