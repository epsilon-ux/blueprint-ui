import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  paginationMD = `
    \`\`\`html
    <bp-table
      [isDataLoading]="isDataLoading"
      [data]="tableData"
      [dataLength]="filteredData.length"
      [properties]="properties"
      (action)="handleAction($event)"
      (onSort)="handleSort($event)"
      (selectedRowsAction)="handleSelectedRowsAction($event)"
    >
      <bp-pagination
        [dataLength]="filteredData.length"
        [defaultNumberOfRows]="10"
        [pageBuffer]="1"
        (pageData)="handlePageChange($event)"
      ></bp-pagination>
    </bp-table>
    \`\`\`
  `;

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

  templateColsMD1 = `
    \`\`\`html
    <ng-template #templateColumn let-rowData>
      Template column example for row {{ rowData.id }}
    </ng-template>
    \`\`\`
  `;

  templateColsMD2 = `
    \`\`\`typescript
    @ViewChild('templateColumn', {static: true}) templateColumn;
    \`\`\`
  `;

  templateColsMD3 = `
    \`\`\`typescript
    columns = [{
      headerText: 'Template Column',
      isColumnDisplayed: true,
      type: ColumnType.TEMPLATE,
      template: this.templateColumn,
      isSortable: false
    },...]
    \`\`\`
  `;

  expandableRowsMD1 = `
    \`\`\`html
    <ng-template #expandableRow let-rowData>
      Expandable row example for row {{ rowData.id }}
    </ng-template>
    \`\`\`
  `;

  expandableRowsMD2 = `
    \`\`\`typescript
    @ViewChild('expandableRow', {static: true}) expandableRowTemplate;
    \`\`\`
  `;

  expandableRowsMD3 = `
    \`\`\`typescript
    properties: Properties = {
      ...
      expandableRowsTemplate: expandableRowTemplate
      ...
    };
    \`\`\`
  `;


  constructor() { }

  ngOnInit(): void {
  }

}