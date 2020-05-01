import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  codeExample = `
  \`\`\`html
  <bp-multi-select
    label="Label Text"
    ...
  >
    <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
      <span>Selected {{ items.length }} items</span>
    </ng-template>
  </bp-multi-select>
  \`\`\`
  `;

  constructor() { }

  ngOnInit() {
  }

}
