import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  tileBodyContent = `
    \`\`\`html
    <bp-tile titleText="Tile Title">
      <ng-container tile-body>
        <!-- Add content here -->
      </ng-container>
    </bp-tile>
    \`\`\`
  `;

  constructor() { }

  ngOnInit(): void {
  }

}