import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {

  navTabItems = `
    \`\`\`html
    <bp-landing-page-header
      [headingText]="headingText"
      [actionText]="actionText"
      [dropdownItems]="dropdownItems"
      (actionClick)="handleAction($event)"
    >
      <ng-container tab-items>
        <div class="row">
          <div class="col">
            <nav aria-label="Secondary Navigation">
              <a class="tab active" routerLink="">Tabbed Navigation Item</a>
              <a class="tab" routerLink="">Tabbed Navigation Item</a>
              <a class="tab" href="">External Tabbed Navigation Item</a>
            </nav>
          </div>
        </div>
      </ng-container>
    </bp-landing-page-header>
    \`\`\`
  `;

  constructor() { }

  ngOnInit(): void { }

}