import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})

export class ApiComponent implements OnInit {

  ribbonContent = `
  \`\`\`html
  <bp-ribbon>
    <div ribbon-content class="font-weight-regular mx-auto">
      <!-- Add content here -->
    </div>
  </bp-ribbon>
  \`\`\`
  `;

  constructor() { }

  ngOnInit() { }

}