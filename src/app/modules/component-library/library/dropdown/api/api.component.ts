import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  codeExample = `
  \`\`\`html
  <div class="col-auto">
    <bp-dropdown
      class="dropdown"
      dropdownText="Primary Dropdown"
      [dropdownItems]="exampleItems"
      classes="btn-primary"
    ></bp-dropdown>
  </div>
  \`\`\`
  `;

  constructor() { }

  ngOnInit() { }

}
