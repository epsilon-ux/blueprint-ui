import { Component } from '@angular/core';

@Component({
  selector: 'app-componentList',
  templateUrl: './componentList.component.html',
  styleUrls: ['./componentList.component.scss']
})
export class ComponentListComponent {
  components = [
    {
      route: 'table',
      text: 'Table'
    }
  ];

  constructor() {}
}
