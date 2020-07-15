import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  contentProjection = `
    \`\`\`html
    <bp-nav-secondary
      title="Title"
      [items]="navItems"
    >
      <ng-container search>
        <!-- Place search here. The search will render between the title and nav links. -->
      </ng-container>
      <ng-container footer>
        <!-- Place content that appears below the nav links here. -->
      </ng-container>
    </bp-nav-secondary>
  \`\`\`
  `;

  constructor() { }

  ngOnInit(): void {
  }

}