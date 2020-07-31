import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})

export class ApiComponent implements OnInit {

  panelContent = `
    \`\`\`html
    <bp-panel 
      titleText="Panel Title"
      [panelHeaderLink]="true"
      [panelFooter]="true"
    >
      <ng-container panel-header-link>
        <!-- Add content here -->
      </ng-container>
      <ng-container panel-body>
        <!-- Add content here -->
      </ng-container>
      <ng-container panel-footer>
        <!-- Add content here -->
      </ng-container>
    </bp-panel>
    \`\`\`
  `;

  constructor() { }

  ngOnInit(): void { }

}