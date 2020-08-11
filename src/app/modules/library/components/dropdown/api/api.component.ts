import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {

  codeExample = `
  \`\`\`html
  <div class="col-auto">
    <bp-dropdown
      triggerText="Primary Dropdown"
      triggerClasses="btn-primary"
      dropDirection="up"
      [dropdownItems]="exampleItems"
    ></bp-dropdown>
  </div>
  \`\`\`
  `;

  constructor() { }

  ngOnInit(): void { }

}