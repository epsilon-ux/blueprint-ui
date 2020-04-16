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
      triggerText="Primary Dropdown"
      [dropdownItems]="exampleItems"
      triggerClasses="btn-primary"
      menuPlacement="up"
    ></bp-dropdown>
  </div>
  \`\`\`
  `;

  constructor() { }

  ngOnInit() { }

}
