import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {

  panelContent = `
  \`\`\`html
  <bp-collapsible-panel>
    <div panel-content>
      <!-- Add content here -->
    </div>
  </bp-collapsible-panel>
  \`\`\`
  `;

  constructor() { }

  ngOnInit() {
  }

}