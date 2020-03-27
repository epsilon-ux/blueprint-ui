import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  tableFiltersMD = `
    \`\`\`html
    <bp-table
      [isDataLoading]="isDataLoading"
      [data]="data"
      [properties]="properties"
      (action)="handleAction($event)"
      (selectedRowsAction)="handleSelectedRowsAction($event)"
    >
      <ng-container table-filters>
        <!-- Add content here -->
      </ng-container>
    </bp-table>
    \`\`\`
    `;

  constructor() { }

  ngOnInit() {
  }

}
